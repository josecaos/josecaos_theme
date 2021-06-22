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

  <?php 
  
    endwhile; 
  
    get_template_part('secciones/player');
  
  ?>
  

</section>