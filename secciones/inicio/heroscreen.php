<section id="heroscreen" class="columns h-100-v p-0 p-t-3">

  <?php
  $args = page_id(70);
  $q = new WP_Query($args);

  if ($q->have_posts()):
    while ($q->have_posts()): $q->the_post();
    ?>
    <div class="columns">
      <div class="row w-100 align-middle">

        <h1 class="columns text-center text-shadow ">
          <?php
          echo get_the_content();
          ?>
        </h1>


      </div>
    </div>

  <?php endwhile; ?>
<?php endif; ?>
</section>
