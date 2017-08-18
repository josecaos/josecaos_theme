<!-- svg intro -->
<section class="columns h-100-v p-0 p-t-3">

  <?php
  $args = page_id(70);
  $q = new WP_Query('page');

  if (have_posts()->$q):
    while (have_posts()->$q): the_post()->$q;
?>
  <div class="columns">
    <div class="row w-100 align-middle">


<?php
echo get_the_content();

?>



    </div>
  </div>

<?php endwhile; ?>
<?php endif; ?>
</section>
