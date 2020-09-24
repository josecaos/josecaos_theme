<ul id="lista-menu" class="col-xs-12">

  <?php
  wp_nav_menu( array(
    'theme_location' => 'principal',
    'items_wrap'  => '<ul id="nav" class="columns align-right">%3$s</ul>',
    'container' => ''
  ));
  ?>
</ul>

<section class="col-xs-12">
  <!-- <h5 class="columns text-center">Donaciones</h5> -->
  <strong class="texto-donacion col-xs-12"><p class="color-oscuro"> Donaciones </p></strong>

  <div class="col-12">

    <?php
    $crypto = array(
      'Bitcoin:' => '3Mw527fhct6sfJLmGMGGLGdzykJfZSVZnY',
      'Ethereum:' => '0x6AA2D63dAAa46578FE0EA776EC38495387C1169e',
      'ZCash:' => 't1bSPYonAVkzAaVy9TX6StJ2SZPboYDEpzb',
    );

    for ($i=0; $i < count($crypto); $i++):
      $titulo = key($crypto);
      ?>

      <label><i class="fa fa-arrow-down"></i> <?php echo $titulo;next($crypto);?>
        <input type="text" readonly value="<?php echo $crypto[$titulo];?>">
      </label>

      <?php
    endfor;
    ?>
  </div>
</section>
