<ul id="lista-menu" class="columns p-0 text-left h-30-v color-oscuro-bg">

  <?php
  $arr = array('Releases', 'fechas', 'Códigos', 'contacto');
  for ($i=0; $i < 4 ; $i++):
    ?>

    <li class="columns small-6 h-a text-center">
      <a class="columns p-1" href="#">
        <?php echo $arr[$i]; ?>
      </a>
    </li>

    <?php
  endfor;
  ?>

</ul>

<section class="columns p-t-0-3 text-left h-70-v">
  <h5 class="columns text-center">Donaciones</h5>
  <small class="texto-donacion columns text-justify"><p class="color-oscuro">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laborum assumenda nihil soluta repudiandae.
  </p></small>



</section>
