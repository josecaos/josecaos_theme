<?php
function theme_enqueue_styles() {

    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style )
    );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
//
##custom scripts
function custom_scripts() {
    wp_enqueue_script( 'josecaos-js', '/wp-content/themes/josecaos_theme/assets/js/josecaos.js', array( 'jquery' ), '0.1', true );
}
add_action('wp_enqueue_scripts', 'custom_scripts', 998);
