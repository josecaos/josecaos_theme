<section id="contacto" class="columns small-12 medium-9 large-10 h-a p-0 p-top p-bottom">

  <?php
  while (have_posts()): the_post();
  ?>
  <div class="row">

    <div class="columns text-center text-shadow">

      <h2 class="columns"><?php echo get_the_title(); ?></h2>


      <p class="titulo-inicio columns p-0 text-center">

        <?php
        echo get_the_content();
        ?>
      </p>

      <!-- formulario   -->
      <div class="grid-container p-1-2 p-md-2 h-a">
        <div class="grid-x grid-padding-x">
          <?php echo do_shortcode('[contact-form-7 id="15" title="Contact Caos"]'); ?>
        </div>
      </div>

    </div>
  </div>
  <div class="columns p-bottom"></div>

<?php endwhile; ?>

</section>
