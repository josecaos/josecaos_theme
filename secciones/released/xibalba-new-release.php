<section id="info" class="columns small-10 medium-9 large-8 p-0 top left">


  <div class="row align-middle">
  <div class="columns h-a p-1 shadow-white rel skewed-bg">
    <div class="columns p-0 absUpL cortina-rojo-bg z-1"></div>

    <?php

    if ( have_posts() ) :
      while ( have_posts() ) : the_post(); ?>
      <h2 class="columns p-0 text-center text-shadow-white">Nuevo Release</h2>
      <h3 class="columns p-0 text-center text-shadow-white"><?php echo get_the_title(); ?></h3>

      <div class="columns small-11 medium-10 large-8 small-centered text-shadow-white texto-skewed h-a font-s font-sm-m font-lg-l">

        <?php
        echo get_the_content();
        ?>
      </div>

      <?php
    endwhile;
  endif; ?>

</div>
</div>
</section>
