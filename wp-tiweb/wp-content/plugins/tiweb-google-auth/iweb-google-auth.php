<?php
/**
 * Plugin Name: TIWEB - Autenticação Google JWT
 * Description: Endpoint REST customizado para validar tokens do Google e gerar JWT.
 * Version: 1.0
 * Author: Arquiteto TIWEB
 */

if (!defined('ABSPATH')) exit; // Segurança: Não acessar diretamente

// 1. Registra a nossa rota exclusiva no WordPress
add_action('rest_api_init', function () {
    register_rest_route('tiweb/v1', '/google-login', [
        'methods' => 'POST',
        'callback' => 'tiweb_process_google_login',
        'permission_callback' => '__return_true' // Rota pública
    ]);
});

function tiweb_process_google_login(WP_REST_Request $request) {
    $google_token = $request->get_param('token');

    if (empty($google_token)) {
        return new WP_Error('empty_token', 'Token do Google não enviado', ['status' => 400]);
    }

    // 2. Valida o Token direto na API oficial do Google (Filosofia KISS - sem SDKs pesados)
    $response = wp_remote_get('https://oauth2.googleapis.com/tokeninfo?id_token=' . $google_token);

    if (is_wp_error($response)) {
        return new WP_Error('google_api_error', 'Falha ao conectar com o Google', ['status' => 500]);
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);

    // Se o token for falso, expirado ou adulterado
    if (isset($body['error'])) {
        return new WP_Error('invalid_google_token', 'Token do Google inválido ou expirado', ['status' => 403]);
    }

    // 3. Extrai os dados do usuário do Google
    $email = $body['email'];
    $first_name = isset($body['given_name']) ? $body['given_name'] : '';
    $last_name = isset($body['family_name']) ? $body['family_name'] : '';
    $name = isset($body['name']) ? $body['name'] : 'Usuário';

    // 4. Procura se o cara já tem conta no nosso WordPress
    $user = get_user_by('email', $email);

    if (!$user) {
        // Se não existir, cadastra ele automaticamente agora
        $random_password = wp_generate_password(24, false);
        $user_id = wp_insert_user([
            'user_login' => $email,
            'user_pass'  => $random_password,
            'user_email' => $email,
            'first_name' => $first_name,
            'last_name'  => $last_name,
            'display_name' => $name,
            'role'       => 'subscriber' // Papel de cliente comum
        ]);

        if (is_wp_error($user_id)) {
            return $user_id; // Devolve o erro se der pau ao salvar
        }
        $user = get_user_by('id', $user_id);
    }

    // 5. Gera o nosso Token JWT (Exatamente igual ao plugin do Enrique Chavez)
    $secret_key = defined('JWT_AUTH_SECRET_KEY') ? JWT_AUTH_SECRET_KEY : '';
    if (empty($secret_key)) {
        return new WP_Error('jwt_error', 'Chave secreta JWT não configurada.', ['status' => 500]);
    }

    $issuedAt = time();
    $expire = $issuedAt + (7 * 24 * 60 * 60); // Vale por 7 dias

    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload = json_encode([
        'iss' => get_bloginfo('url'),
        'iat' => $issuedAt,
        'nbf' => $issuedAt,
        'exp' => $expire,
        'data' => ['user' => ['id' => $user->ID]]
    ]);

    // Assinatura do Token (Base64Url)
    $b64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $b64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
    $signature = hash_hmac('sha256', $b64Header . "." . $b64Payload, $secret_key, true);
    $b64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    $jwt = $b64Header . "." . $b64Payload . "." . $b64Signature;

    // 6. Devolve pro Angular O MESMO formato do login manual!
    return rest_ensure_response([
        'token'             => $jwt,
        'user_email'        => $user->user_email,
        'user_nicename'     => $user->user_nicename,
        'user_display_name' => $user->display_name
    ]);

    /**
 * Bloqueia o acesso ao Painel Admin para quem não é Administrador
 */
    add_action('admin_init', function() {
        // Se for uma requisição AJAX, deixa passar
        if (defined('DOING_AJAX') && DOING_AJAX) return;

        // Se o usuário não for administrador...
        if (!current_user_can('administrator')) {
            // Chuta ele de volta para a sua Landing Page no Angular
            wp_redirect('http://localhost:4200'); 
            exit;
        }
    });

    /**
     * Esconde a barra de ferramentas (Admin Bar) para usuários comuns no topo do site
     */
    add_action('after_setup_theme', function() {
        if (!current_user_can('administrator')) {
            show_admin_bar(false);
        }
    });
}