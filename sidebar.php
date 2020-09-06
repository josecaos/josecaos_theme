<?php

$preguntas = ["¿Qué es?", "¿Con qué?", "¿Qué hace?"];
$funcion = [1,2,3];

?>

<section id="sidebar" class="col-xs-12 col-md-3 col-lg-2">

  <ul class="col-xs-12">
    <?php

    for ($i=0; $i < count($preguntas); $i++):

      ?>

      <li class="lista-about col-xs-12 col-sm-6 col-md-12" onclick="texto_cursor(<?php $funcion[$i];?>)">

        <button><?php echo $preguntas[$i]; ?></button>

      </li>

    <?php endfor; ?>


  </ul>

    </section>
