<?php
/*
Plugin Name: TIWEB Security Core
Description: Bloqueia acesso ao painel wp-admin para assinantes (Headless Mode).
Version: 1.1
Author: Luciano Arquiteto
*/

add_action( 'admin_init', 'tiweb_block_wp_admin_access' );
function tiweb_block_wp_admin_access() {
    $is_ajax = defined('DOING_AJAX') && DOING_AJAX;
    
    if ( ! $is_ajax && ! current_user_can( 'administrator' ) ) {
        // Resolve dinamicamente: Tenta pegar a variável do servidor, senão cai pro localhost
        $frontend_url = getenv('FRONTEND_URL') ?: 'http://localhost:4200';
        wp_redirect( $frontend_url ); 
        exit;
    }
}