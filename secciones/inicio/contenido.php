<section id="inicio" class="columns small-12 medium-9 large-10 h-a p-0 p-top p-bottom">
  <!--  -->

  <?php
  while (have_posts()): the_post();
  ?>
  <div class="row w-100 align-middle">

    <div class="columns text-center text-shadow h-a">

      <!-- <h2 class="columns"><?php echo get_the_title(); ?></h2> -->

      <h4 class="columns p-0 text-center">

        <?php
        echo get_the_content();
        ?>
      </h4>
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

      <h3 class="columns"><?php echo get_the_title(); ?></h3>

      <div class="columns p-0 text-justify">

        <?php
        // echo get_the_content();
        ?>
        <!--  -->
        <div class=" columns h-a">

          <div class="column small-12 medium-5 large-6">

            <p>Release número 14 del colectivo <a href="http://nucleoroto.org.mx">Núcleoroto</a></p>

            <p>Descarga gratis desde el sitio:<a href="http://www.nucleoroto.org.mx/?p=1866" target="_blank"><strong>Nucleoroto<strong></a> </p>
              &nbsp;
              <p>Apoya este proyecto comprandolo en:<a href="https://josecaos.bandcamp.com/releases" target="_blank"><strong>Bandcamp<strong></a>, <a href="http://www.amazon.com/gp/product/B06Y11VG1V" target="_blank">Amazon</a> y + tiendas digitales </small>
                &nbsp;
                También escuchandolo en <small><a href="https://open.spotify.com/album/6BTpqqG23MyUnTCPFCcFCq" target="_blank">Spotify</a> / <a href="https://itunes.apple.com/us/album/xibalb%C3%A1/id1222822679?uo=4&app=itunes&at=1001lry3&ct=dashboard" target="_blank">Itunes</a> </p>

                </div>

              <div class=" columns small-12 medium-7 large-6 p-2">
                <iframe style="border: 0; width: 100%; height: 560px;" src="https://bandcamp.com/EmbeddedPlayer/album=2698965189/size=large/bgcol=333333/linkcol=e99708/package=337402447/transparent=true/" seamless no-cover><a href="http://josecaos.bandcamp.com/album/xibalba">Xibalba - josecaos</a></iframe>
              </div>


            </div>

            <!--  -->

          </div>
        </div>


      </div>

    <?php endwhile; ?>
  </div>



</section>
