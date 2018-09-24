<ul id="lista-menu" class="columns p-0 text-left h-a color-oscuro-bg">

  <?php
  wp_nav_menu( array(
    'theme_location' => 'principal',
    'items_wrap'  => '<ul id="nav" class="columns align-right">%3$s</ul>',
    'container' => ''
  ));
  ?>
</ul>

<section class="columns p-t-0-3 text-left h-a">
  <!-- <h5 class="columns text-center">Donaciones</h5> -->
  <strong class="texto-donacion columns text-center"><p class="color-oscuro"> Hit me! with some #crypto  </p></strong>

  <div class="columns h-a">

    <?php
    $crypto = array(
      'Bitcoin' => '3Mw527fhct6sfJLmGMGGLGdzykJfZSVZnY',
      'Ethereum' => '0x6AA2D63dAAa46578FE0EA776EC38495387C1169e',
      'ZCash' => 't1bSPYonAVkzAaVy9TX6StJ2SZPboYDEpzb',
      'Litecoin' => 'MBfgPuc1vLhtyYZQRSZsSwyQRZoSkhwdXJ',
      'Bitcoin Cash' => 'qzqqpvwvmrt9x0hkt2wulk6lesypkp999y5ep5dx7j'
    );

    for ($i=0; $i < count($crypto); $i++):
      $titulo = key($crypto);
      ?>

      <label for=""><?php echo $titulo;next($crypto);?>
        <input type="text" readonly value="<?php echo $crypto[$titulo];?>">
      </label>

      <?php
    endfor;

    ?>
  </div>
</section>
