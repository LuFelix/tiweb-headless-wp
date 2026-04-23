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