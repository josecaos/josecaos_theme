<?php

function caos_styles() {

  ##custom scss compilado
  wp_enqueue_style( 'defaul-style',get_stylesheet_directory_uri() . '/style.css');
  wp_enqueue_style( 'caos-style',get_stylesheet_directory_uri() . '/css/josecaos.css');
  ##fuente 8bit
  wp_enqueue_style( '8bit-font','https://fonts.googleapis.com/css?family=Press+Start+2P');

}
add_action( 'wp_enqueue_scripts', 'caos_styles' );
//
##custom scripts
function caos_scripts() {
  wp_enqueue_script( 'jquery', get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.js' );
  wp_enqueue_script( 'what-input', get_stylesheet_directory_uri() . '/bower_components/what-input/dist/what-input.js',  array( 'jquery' ), '0.1', true );
  wp_enqueue_script( 'foundation', get_stylesheet_directory_uri() . '/bower_components/foundation-sites/dist/js/foundation.js',  array( 'jquery' ), '0.1', true );
  wp_enqueue_script( 'imgLiquid', get_stylesheet_directory_uri() . '/bower_components/imgLiquid/js/imgLiquid-min.js',  array( 'jquery' ), '0.1', true );
  wp_enqueue_script( 'svg', get_stylesheet_directory_uri() . '/bower_components/vivus/js/vivus.min.js',  array( '' ), '0.1', true );
  wp_enqueue_script( 'flocking-js', get_stylesheet_directory_uri() . '/bower_components/flocking/dist/flocking-all.min.js', array( '' ), '0.1', true);
  wp_enqueue_script( 'josecaos-js', get_stylesheet_directory_uri() . '/js/josecaos.js', array( 'jquery' ), '0.1', true);
}
add_action('wp_enqueue_scripts', 'caos_scripts');
