<section id="inicio" class="columns small-12 medium-9 large-10 h-a h-md-100-v p-0 p-top p-bottom">
  <!--  -->

  <?php
  while (have_posts()): the_post();
  ?>
  <div class="row h-80-v align-middle">

    <div class="columns text-center text-shadow h-a">

      <!-- <h2 class="columns"><?php //echo get_the_title(); ?></h2> -->

      <!-- dispara iteracion del titulo -->
      <script type="text/javascript">
      // jQuery(document).ready(function () {
      setTimeout(() => {
        var t = 50
        var x = setInterval(() => {
          texto_init()
          var y = document.getElementById('scrambled')
          var texto = y.innerText
          //
          if (texto === "N O D I O S" || texto === "D I O S N O") {
            clearInterval(x)
            jQuery('.sub-titulo-inicio').css('color','orange')

          } else {

          }
        },t)
      },3000)
      // });
      </script>
      <h2 id="titulo-home" class="titulo-inicio columns p-0 text-center">

        <?php
        echo get_the_content();
        ?>
      </h2>
      <h2 id="scrambled" class="sub-titulo-inicio columns p-0 text-center">

      </h2>
      <div class="arrow columns text-center">
        <i class="fa fa-arrow-down"></i>
      </div>

    </div>


  </div>

<?php endwhile; ?>

<!--  -->
<div class="columns  h-a h-md-100">
  <?php
  $args = page_id(70);
  $q = new WP_Query($args);

  while ($q->have_posts()): $q->the_post();
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
