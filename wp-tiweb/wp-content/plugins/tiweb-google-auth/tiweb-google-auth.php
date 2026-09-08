<?php
/**
 * Plugin Name: TIWEB - Autenticação Google JWT
 * Description: Endpoint REST customizado para validar tokens do Google e gerar JWT.
 * Version: 1.0
 * Author: Arquiteto TIWEB
 */

if (!defined('ABSPATH')) exit; // Segurança: Não acessar diretamente

// 1. Registra TODAS as rotas
add_action('rest_api_init', function () {
    register_rest_route('tiweb/v1', '/google-login', [
        'methods' => 'POST',
        'callback' => 'tiweb_process_google_login',
        'permission_callback' => '__return_true'
    ]);
    register_rest_route('tiweb/v1', '/request-registration', [
        'methods' => 'POST',
        'callback' => 'tiweb_request_registration',
        'permission_callback' => '__return_true'
    ]);
    register_rest_route('tiweb/v1', '/verify-registration', [
        'methods' => 'POST',
        'callback' => 'tiweb_verify_registration',
        'permission_callback' => '__return_true'
    ]);
});

// 2. Funções de Callback
function tiweb_request_registration(WP_REST_Request $request) {
    $email = sanitize_email($request->get_param('email'));
    $password = $request->get_param('password');

    if (empty($email) || empty($password)) {
        return new WP_Error('missing_data', 'Email e senha são obrigatórios', ['status' => 400]);
    }

    $code = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
    $registration_data = [
        'email' => $email,
        'password' => $password, 
        'code' => $code
    ];
    
    set_transient('tiweb_reg_' . $email, $registration_data, 15 * MINUTE_IN_SECONDS);

    $subject = "Seu código de verificação: $code";
    $message = "Olá! Use o código abaixo para confirmar seu cadastro no SPED Fácil:\n\n";
    $message .= "CÓDIGO: $code\n\n";
    $message .= "Este código expira em 15 minutos.";

    $sent = wp_mail($email, $subject, $message);

    if (!$sent) {
        return new WP_Error('mail_error', 'Falha ao enviar e-mail. Verifique o SMTP.', ['status' => 500]);
    }
    return rest_ensure_response(['message' => 'Código enviado com sucesso!']);
}

function tiweb_verify_registration(WP_REST_Request $request) {
    $email = sanitize_email($request->get_param('email'));
    $code = sanitize_text_field($request->get_param('code'));
    $data = get_transient('tiweb_reg_' . $email);

    if (!$data || $data['code'] !== $code) {
        return new WP_Error('invalid_code', 'Código inválido ou expirado', ['status' => 403]);
    }

    $user_id = wp_insert_user([
        'user_login' => $email,
        'user_email' => $email,
        'user_pass'  => $data['password'],
        'role'       => 'subscriber'
    ]);

    if (is_wp_error($user_id)) return $user_id;
    delete_transient('tiweb_reg_' . $email);

    return rest_ensure_response(['message' => 'Usuário criado com sucesso!', 'status' => 'success']);
}

function tiweb_process_google_login(WP_REST_Request $request) {
    $google_token = $request->get_param('token');
    if (empty($google_token)) {
        return new WP_Error('empty_token', 'Token do Google não enviado', ['status' => 400]);
    }

    $response = wp_remote_get('https://oauth2.googleapis.com/tokeninfo?id_token=' . $google_token);
    if (is_wp_error($response)) {
        return new WP_Error('google_api_error', 'Falha ao conectar com o Google', ['status' => 500]);
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);
    if (isset($body['error'])) {
        return new WP_Error('invalid_google_token', 'Token do Google inválido ou expirado', ['status' => 403]);
    }

    $email = $body['email'];
    $first_name = isset($body['given_name']) ? $body['given_name'] : '';
    $last_name = isset($body['family_name']) ? $body['family_name'] : '';
    $name = isset($body['name']) ? $body['name'] : 'Usuário';

    $user = get_user_by('email', $email);

    if (!$user) {
        $random_password = wp_generate_password(24, false);
        $user_id = wp_insert_user([
            'user_login' => $email,
            'user_pass'  => $random_password,
            'user_email' => $email,
            'first_name' => $first_name,
            'last_name'  => $last_name,
            'display_name' => $name,
            'role'       => 'subscriber' 
        ]);
        if (is_wp_error($user_id)) return $user_id;
        $user = get_user_by('id', $user_id);
    }

    $secret_key = defined('JWT_AUTH_SECRET_KEY') ? JWT_AUTH_SECRET_KEY : '';
    if (empty($secret_key)) {
        return new WP_Error('jwt_error', 'Chave secreta JWT não configurada.', ['status' => 500]);
    }

    $issuedAt = time();
    $expire = $issuedAt + (7 * 24 * 60 * 60); 

    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload = json_encode([
        'iss' => get_bloginfo('url'),
        'iat' => $issuedAt,
        'nbf' => $issuedAt,
        'exp' => $expire,
        'data' => ['user' => ['id' => $user->ID]]
    ]);

    $b64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $b64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
    $signature = hash_hmac('sha256', $b64Header . "." . $b64Payload, $secret_key, true);
    $b64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    $jwt = $b64Header . "." . $b64Payload . "." . $b64Signature;

    return rest_ensure_response([
        'token'             => $jwt,
        'user_email'        => $user->user_email,
        'user_nicename'     => $user->user_nicename,
        'user_display_name' => $user->display_name
    ]);
} // <--- FIM DA FUNÇÃO DE LOGIN! AGORA SIM!

// 3. Bloqueios de Interface
add_action('after_setup_theme', function() {
    if (!current_user_can('edit_posts')) {
        show_admin_bar(false);
    }
});