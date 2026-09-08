<?php
/**
 * Plugin Name: TIWEB - Content Manager (SPED Fácil)
 * Description: Gerencia Tipos de Post customizados (Downloads/Materiais) e expõe para o WPGraphQL.
 * Version: 1.0
 * Author: Arquiteto TIWEB
 */

if (!defined('ABSPATH')) exit;

/**
 * 1. Registra o Custom Post Type "Materiais"
 */
add_action('init', 'tiweb_register_materiais_cpt');
function tiweb_register_materiais_cpt() {
    $labels = [
        'name'               => 'Materiais SPED',
        'singular_name'      => 'Material SPED',
        'menu_name'          => 'Materiais SPED',
        'add_new'            => 'Adicionar Novo',
        'add_new_item'       => 'Adicionar Novo Material',
        'edit_item'          => 'Editar Material',
        'new_item'           => 'Novo Material',
        'view_item'          => 'Ver Material',
        'search_items'       => 'Procurar Materiais',
        'not_found'          => 'Nenhum material encontrado',
        'not_found_in_trash' => 'Nenhum material na lixeira',
        'all_items'          => 'Todos os Materiais'
    ];

    $args = [
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => false, // Não precisa página de arquivo nativa (Headless) vai no Angular
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_icon'           => 'dashicons-download', // Ícone de download para o menu
        'supports'            => ['title', 'editor'], // Suporta título e uma descrição básica
        
        // Linhas para o WPGraphQL
        'show_in_graphql'     => true,
        'graphql_single_name' => 'materialSped',
        'graphql_plural_name' => 'materiaisSped',
    ];

    register_post_type('material_sped', $args);
}

/**
 * 2. Registra os campos personalizados (ACF) para Materiais SPED
 */
add_action('acf/init', 'tiweb_register_materiais_acf_fields');
function tiweb_register_materiais_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key' => 'group_69e98a37cf57f',
        'title' => 'Dados do Material',
        'fields' => [
            [
                'key' => 'field_69e98a6a91b1b',
                'label' => 'Arquivo para Download',
                'name' => 'arquivo_para_download',
                'aria-label' => '',
                'type' => 'file',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'return_format' => 'url',
                'library' => 'all',
                'min_size' => '',
                'max_size' => '',
                'mime_types' => '',
                'allow_in_bindings' => 0,
                'show_in_graphql' => 1,
                'graphql_description' => '',
                'graphql_field_name' => 'arquivoParaDownload',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'material_sped',
                ],
            ],
        ],
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 0,
        'show_in_graphql' => 1,
        'graphql_field_name' => 'dadosDoMaterial',
        'map_graphql_types_from_location_rules' => 0,
        'graphql_types' => '',
    ]);
}