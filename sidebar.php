<?php

$preguntas = ["¿Qué es?", "¿Con qué?", "¿Qué hace?"];
$funcion = [1,2,3];
?>

<div class="columns small-12 medium-3 large-2 p-0 h-a h-md-100 p-top" data-sticky-container>

  <!-- medium / large -->
  <ul class="columns h-a p-0 p-t-1 show-for-medium" data-sticky data-margin-top="5">
    <?php

    // $preguntas = ["¿Qué es esto?", "¿Lenguaje favorito?", "¿Qué Música?"];
    // $funcion = [1,2,3];
    for ($i=0; $i < 3; $i++):

      ?>

      <li class="lista-about columns small-6 medium-12 p-0 pointer end" onclick="texto_cursor(<?php echo $funcion[$i];?>)">

        <p class="columns"><?php echo $preguntas[$i]; ?></p>

      </li>

    <?php endfor; ?>


  </ul>

  <!-- movil -->
  <ul class="columns h-a p-0 p-t-1 show-for-small-only">

    <?php

    // $preguntas = ["¿Qué es esto?", "¿Qué lenguaje?", "¿Qué tipo de música?"];
    // $funcion = [1,2,3];
    for ($i=0; $i < 3; $i++):

      ?>

      <li class="lista-about columns small-6 medium-4 large-12 p-0 pointer end" onclick="texto_cursor(<?php echo $funcion[$i];?>)">

        <p class="columns"><?php echo $preguntas[$i]; ?></p>

      </li>

    <?php endfor; ?>


  </ul>

</div>
