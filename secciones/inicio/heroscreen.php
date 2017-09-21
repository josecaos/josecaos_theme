<section id="inicio" class="columns small-12 medium-9 large-10 h-a h-md-100-v p-0 p-top p-bottom">

  <!--  -->
  <div class="columns  h-a h-md-100">
    <?php
    $args = page_id(70);
    $q = new WP_Query($args);

    if ($q->have_posts()):
      while ($q->have_posts()): $q->the_post();
      ?>
      <div class="row w-100 align-middle">

        <div class="columns text-center text-shadow h-a">

          <h2 class="columns"><?php echo get_the_title(); ?></h2>

          <div class="columns p-0 text-justify">

            <?php
            echo get_the_content();
            ?>
          </div>
        </div>


      </div>

    <?php endwhile; ?>
  <?php endif; ?>
</div>



</section>
