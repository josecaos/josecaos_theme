<?php
/*Template Name: Baul*/

get_header();
?>
<div id="content" class="header_offset">

  <div id="inner-content" class="row expanded">


    <main id="main-blog" class="large-8 medium-8 columns" role="main">

      <?php //if (have_posts()) : while (have_posts()) : the_post(); ?>

        <!-- To see additional archive styles, visit the /parts directory -->
        <?php //get_template_part( 'parts/loop', 'archive' ); ?>

        <?php //endwhile; ?>

        <?php //joints_page_navi(); ?>

        <?php //else : ?>

          <?php //get_template_part( 'parts/content', 'missing' ); ?>

          <?php //endif; ?>

          <script>

            steemit_posts()

          </script>

          <!-- test steemit post -->
          <h1 id="title"></h1>
          <div id="output"></div>

        </main> <!-- end #main -->

        <?php get_sidebar(); ?>

      </div> <!-- end #inner-content -->

    </div> <!-- end #content -->

    <?php

    get_footer();

    ?>
