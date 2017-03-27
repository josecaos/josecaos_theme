<?php
/*Template Name: Inicio*/

get_header();

?>

<section class="columns p-0 rel">
  <div class="columns p-0 absUpL imgLiquid imgLiquidFill z-1">
    <img src="<?php echo get_stylesheet_directory_uri();?>/img/fondo3.jpg" alt="" />
  </div>

<?php
get_template_part('secciones/home/heroscreen');
get_template_part("sidebar");
?>

</section>

<?php

get_footer();
