<?php

// Dependencias
function dependencias() {

  ##custom scss compilado
  wp_enqueue_style( 'defaul-style',get_stylesheet_directory_uri() . '/style.css');
  wp_enqueue_style( 'caos-style',get_stylesheet_directory_uri() . '/public/css/josecaos.css');

  ## fuente contenidos
  wp_enqueue_style( 'content-font','https://fonts.googleapis.com/css?family=Space+Mono');
  ## fuente 8bit
  wp_enqueue_style( '8bit-font','https://fonts.googleapis.com/css?family=Press+Start+2P');
  ##
  wp_enqueue_style( 'txt-font', 'https://fonts.googleapis.com/css?family=Roboto+Mono');
  wp_enqueue_style( 'txxt-font', 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed');
   
  wp_enqueue_script( 'josecaos-js', get_stylesheet_directory_uri() . '/public/js/josecaos.min.js', array( 'jquery' ), '0.1', false);

}
add_action( 'wp_enqueue_scripts', 'dependencias' );
//
//
register_nav_menus( array(
  'principal'   => __( 'Menú principal', 'josecaos' ),
) );

//
function sidebars() {

	register_sidebar( array(
		'name'          => 'Caos 1 sidebar',
		'id'            => 'caos-1-sidebar',
		'before_widget' => '<div class="">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="">',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'sidebars' );
//
function page_id($id) {

  return array( 'page_id' => $id );

}
//SEO Press
function seopress_theme_slug_setup() {
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'seopress_theme_slug_setup' );
