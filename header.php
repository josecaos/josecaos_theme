<!doctype html>

<html class="no-js" <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <!-- <title><?php //echo bloginfo(); 
              ?></title> -->
  <!-- Force IE to use the latest rendering engine available -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Mobile Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta class="foundation-mq">

  <!-- If Site Icon isn't set in customizer -->
  <?php if (!function_exists('has_site_icon') || !has_site_icon()) { ?>
    <!-- Icons & Favicons -->
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png">
    <link href="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png" rel="apple-touch-icon" />

    <meta name="msapplication-TileColor" content="#f01d4f">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/img/favicon/fav32.png">
    <meta name="theme-color" content="#121212">
  <?php } ?>

  <!-- <link rel="pingback" href="<?php //bloginfo('pingback_url'); 
                                  ?>"> -->

  <?php wp_head(); ?>

  <!-- Analytics -->
  <script>
    // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    //   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    //
    // ga('create', 'UA-74096683-1', 'auto');
    // ga('send', 'pageview');
  </script>
  <!-- -->

</head>

<body>

  <header id="header" class="container-fluid fixed">
    <!--  -->
    <div class="logo">

      <div id="jc-logo" class="col-12">
        <h6 class="col-12" style="text-transform:lowercase;">
          <a href="<?php echo home_url(); ?>" class="logo color-verde"><?php echo bloginfo(); ?></a>
           <small><span class="texto-cursor color-negro-bg"></span></small>
           <span class="logo-cursor">|</span>
        </h6>

      </div>


    </div>

    <!--  -->

    <div class="iconos regresa-icono-menu">
      <a id="menu-bars">
      </a>
    </div>


  </header>

  <nav id="menu" class="menu col-xs-12 col-sm-8 col-md-6 col-lg-4 fixed">

    <?php
    // get_template_part('secciones/menu');
    ?>

  </nav>

  <div id="fondo1" class="col-xs-12"></div>

  <!-- <div id="contenedor" class="columns h-100-v p-top rel"> -->

  <main id="main" class="container-fluid">


    <?php
    get_template_part("sidebar");
    ?>