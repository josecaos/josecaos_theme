<?php

// Dependencias
function caos_styles() {

  ##custom scss compilado
  wp_enqueue_style( 'defaul-style',get_stylesheet_directory_uri() . '/style.css');
  wp_enqueue_style( 'caos-style',get_stylesheet_directory_uri() . '/css/josecaos.css');

  ## fuente contenidos
  wp_enqueue_style( 'content-font','https://fonts.googleapis.com/css?family=Space+Mono');
  ## fuente 8bit
  wp_enqueue_style( '8bit-font','https://fonts.googleapis.com/css?family=Press+Start+2P');
  ##
  wp_enqueue_style( 'txt-font', 'https://fonts.googleapis.com/css?family=Roboto+Mono');
  wp_enqueue_style( 'txxt-font', 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed');

}
add_action( 'wp_enqueue_scripts', 'caos_styles' );
//
##custom scripts
function caos_scripts() {
  wp_enqueue_script( 'jquery', get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.js' );
  wp_enqueue_script( 'what-input', get_stylesheet_directory_uri() . '/bower_components/what-input/dist/what-input.js',  array( 'jquery' ), '0.1', true );
  wp_enqueue_script( 'foundation', get_stylesheet_directory_uri() . '/bower_components/foundation-sites/dist/js/foundation.js',  array( 'jquery' ), '0.1', true );
  wp_enqueue_script( 'imgLiquid', get_stylesheet_directory_uri() . '/bower_components/imgLiquid/js/imgLiquid-min.js',  array( 'jquery' ), '0.1', true );
  // wp_enqueue_script( 'svg', get_stylesheet_directory_uri() . '/bower_components/vivus/dist/vivus.js',  array( 'jquery' ), '0.1', true );
  // wp_enqueue_script( 'flocking-js', get_stylesheet_directory_uri() . '/bower_components/flocking/dist/flocking-all.min.js', array( '' ), '0.1', true);
  wp_enqueue_script( 'josecaos-js', get_stylesheet_directory_uri() . '/js/josecaos.js', array( 'jquery' ), '0.1', true);
  // steemit blog
  wp_enqueue_script( 'steemit-js', '//cdn.steemjs.com/lib/latest/steem.min.js', array( 'jquery' ), '0.1', true);
  wp_enqueue_script( 'showdown-js', 'https://rawgit.com/showdownjs/showdown/1.7.0/dist/showdown.min.js', array( 'jquery' ), '0.1', true);
}
add_action('wp_enqueue_scripts', 'caos_scripts');

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
