<section id="inicio" class="columns h-100-v p-0 p-top p-bottom">

<div class="columns small-12 medium-3 large-2 h-a h-md-100">

  <h6 class="columns text-left h-a p-t-0-2"></h6>

  <ul class="columns h-a">

    <?php

    $preguntas = ["¿Qué hago?", "¿Qué uso?", "¿Qué toco?"];
    $funcion = [1,2,3];
    for ($i=0; $i < 3; $i++):

      ?>

      <li class="lista-about grid-x padding-grid-x pointer p-t-1 p-b-1" onclick="texto_cursor(<?php echo $funcion[$i];?>)">

        <p class="columns"><?php echo $preguntas[$i]; ?></p>

      </li>

    <?php endfor; ?>


  </ul>


</div>

<!--  -->
<div class="columns small-12 medium-9 large-10 h-a h-md-100">
<?php
$args = page_id(70);
$q = new WP_Query($args);

if ($q->have_posts()):
  while ($q->have_posts()): $q->the_post();
  ?>
    <div class="row w-100 align-middle">

      <h1 class="columns text-center text-shadow ">
        <?php
        echo get_the_content();
        ?>
      </h1>


    </div>

<?php endwhile; ?>
<?php endif; ?>
</div>



</section>
