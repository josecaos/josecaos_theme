<section class="columns">


  <div class="row align-middle">
  <div class="columns h-a p-1 color-azul-claro-bg">

    <?php

    if ( have_posts() ) :
      while ( have_posts() ) : the_post(); ?>
      <h1 class="columns p-0 text-center">Nuevo Release</h1>
      <h2 class="columns p-0 text-center"><?php echo get_the_title(); ?></h2>

      <div class="columns small-11 medium-10 large-8 small-centered h-a font-s font-sm-m font-lg-l">

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
