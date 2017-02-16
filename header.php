<!doctype html>

<html class="no-js"  <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">

  <!-- Force IE to use the latest rendering engine available -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Mobile Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta class="foundation-mq">

  <!-- If Site Icon isn't set in customizer -->
  <?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
    <!-- Icons & Favicons -->
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
    <link href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-icon-touch.png" rel="apple-touch-icon" />
    <!--[if IE]>
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    <![endif]-->
    <meta name="msapplication-TileColor" content="#f01d4f">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/assets/images/win8-tile-icon.png">
    <meta name="theme-color" content="#121212">
    <?php } ?>

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>

    <!-- Analytics -->
    <script>
    // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    //
    // ga('create', 'UA-74096683-1', 'auto');
    // ga('send', 'pageview');

    </script>
    <!-- -->

  </head>

  <body>
    <header id="header-escritorio" class="columns h-15-v fixed top left p-0 hide-for-small-only">

      <i class="fa fa-bitcoin font-xxl black"></i>

    </header>
    <header id="header-movil" class="columns h-10-v fixed top left p-0 show-for-small-only">

      <div class="columns small-10 medium-11">

        <div class="row small-12 align-middle medium-1">
          <div class="columns h-a">
            Logo
          </div>
        </div>

      </div>

      <!--  -->
      <div class="columns small-2 medium-11">
        <div class="row small-12 align-middle medium-1">

          <div class="iconos columns small-10 medium-11 font-l text-center h-a">
            <!-- icono desde js -->
          </div>


        </div>
      </div>


    </header>


    <div id="main" class="columns p-0 p-top">




      <div class="numeros columns">

      </div>
