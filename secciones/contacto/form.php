<section id="contacto" class="container">

  <?php
  while (have_posts()): the_post();
  ?>
  <div class="contenedor row">

    <div class="col-xs-12">

      <h2 class="col-12"><?php echo get_the_title(); ?></h2>


      <p class="contenido col-12">

        <?php
        echo get_the_content();
        ?>
      </p>

      <!-- formulario   -->
      <div class="formulario container">
          <?php echo do_shortcode('[contact-form-7 id="15" title="Contact Caos"]'); ?>
      </div>

    </div>
  </div>
  <div class="col-12"></div>

<?php endwhile; ?>

</section>
