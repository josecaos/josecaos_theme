<section id="inicio" class="col-xs-12 col-md-9 col-lg-10">
  <!--  -->

  <?php
  while (have_posts()) : the_post();
  ?>
    <div class="contenedor row">

      <div class="titulo-contenedor col-xs-12">

        <h2 id="titulo-home" class="titulo-inicio col-12">

          <?php
          echo get_the_content();
          ?>

        </h2>

        <h2 id="scrambled" class="sub-titulo-inicio col-12"></h2>

        <div class="arrow col-12">

          <a href="#release">
            <i class="fa fa-arrow-down"></i>
          </a>

        </div>

      </div>


    </div>

  <?php endwhile; ?>

  <!--  -->
  <div class="columns  h-a h-md-100">
    <?php
    $args = page_id(70);
    $q = new WP_Query($args);

    while ($q->have_posts()) : $q->the_post();
    ?>
      <div class="row w-100 align-middle">

        <div class="columns text-left text-shadow h-a">

          <h4 class="columns"><?php echo get_the_title(); ?></h4>

          <div class="columns p-0 text-right">

            <!--  -->
            <div class=" columns h-a">


              <?php
              echo get_the_content();
              ?>

            </div>

            <!--  -->

          </div>
        </div>


      </div>

    <?php endwhile; ?>
  </div>



</section>