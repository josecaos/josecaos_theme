<?php
/*Template Name: Inicio*/


get_header();

?>
<!-- svg intro -->
<div class="columns small-12 medium-8 large-9 h-100 text-center">

<div class="columns p-0 h-50 align-middle">

  <path id="heroscreen-svg" class="columns h-30"></path>

</div>

</div>
<div class="columns small-12 medium-4 large-3 h-100 text-center">

  <div class="numeros columns text-center">
    <!-- contador aqui desde js -->
  </div>

  <div class="columns text-center">
    <!-- contador aqui desde js -->
    <?php dynamic_sidebar('caos-1-sidebar') ?>
  </div>

  </div>

<!-- fin intro -->
<?php

get_footer();
