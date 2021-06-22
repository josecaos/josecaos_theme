<!--  -->
<div class="release container">
    <?php
    $args = array('page_id' => 70);
    $q = new WP_Query($args);

    while ($q->have_posts()) : $q->the_post();
    ?>
      <div class="row">
        
        <div class="col-12">
          
          <h4><?php echo get_the_title(); ?></h4>
            <!--  -->
            <div id="release" class="col-12-xs">


              <?php
              echo get_the_content();
              ?>

            </div>

            <!--  -->

          </div>


      </div>

    <?php endwhile; ?>
  </div>
