
  <div class="columns small-12 medium-3 large-2 p-0 h-a h-md-100 p-top" data-sticky-container>

    <ul class="columns h-a p-0 p-t-1" data-sticky data-margin-top="5">

      <?php

      $preguntas = ["¿Qué hago?", "¿Qué uso?", "¿Qué toco?"];
      $funcion = [1,2,3];
      for ($i=0; $i < 3; $i++):

        ?>

        <li class="lista-about columns small-4 medium-12 large-12 p-0 pointer" onclick="texto_cursor(<?php echo $funcion[$i];?>)">

          <p class="columns"><?php echo $preguntas[$i]; ?></p>

        </li>

      <?php endfor; ?>


    </ul>


  </div>
