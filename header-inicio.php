<!doctype html>

<html class="no-js"  <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <title>JoseCaos</title>
  <!-- Force IE to use the latest rendering engine available -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Mobile Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta class="foundation-mq">

  <!-- If Site Icon isn't set in customizer -->
  <?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
    <!-- Icons & Favicons -->
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png">
    <link href="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png" rel="apple-touch-icon" />

    <meta name="msapplication-TileColor" content="#f01d4f">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png">
    <meta name="theme-color" content="#121212">
    <?php } ?>

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>

    <!-- Analytics -->
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-74096683-1', 'auto');
    ga('send', 'pageview');

    </script>
    <!-- -->

  </head>

  <body>

    <header id="header" class="columns h-10-v fixed top left p-0 shadow color-negro-bg z1k1">
      <!--  -->
      <div class="columns small-10 medium-11">

        <div id="jc-logo" class="row expanded align-middle">
          <!-- <path id="jc-logo" class="columns p-0"></path> -->
          <h6 class="columns p-l-1 p-0 color-claro text-left color-verde">
            JoseCaos <small><span class="texto-cursor"></span></small><span class="logo-cursor">|</span>
          </h6>

        </div>


      </div>

      <!--  -->
      <div class="columns small-2 medium-1">
        <div class="row small-12 align-middle">
          <div class="iconos columns text-center h-a regresa-icono-menu">
            <a id="menu-bars" class="columns p-0 font-xl">
              <!-- icono animado desde js -->
            </a>
          </div>
        </div>
      </div>


    </header>

    <nav id="menu" class="menu columns small-8 medium-6 large-4 p-0 p-top h-100 fixed top right z1k color-amarillo-bg">

      <?php
      get_template_part('secciones/menu');
      ?>

    </nav>


    <!-- <div id="contenedor" class="columns h-100-v p-top rel"> -->

    <main id="main" class="grid-x grid-padding-x h-a">

      <div id="fondo1" class="columns left z-1">

      </div>
      <!-- <div id="heroscreen-anim" class="columns p-0 fixed top left z-1">

      <div id="heroscreen-svg" class="columns p-0"></div>

    </div> -->
