</main>  <!-- end .main-content -->
<?php
get_template_part("sidebar");
?>
</div>
<!-- contenedor -->


<footer class="footer columns fixed bottom left color-negro-bg shadow-up">

	<div id="inner-footer" class="row expanded p-0 h-100 align-middle">

		<nav role="navigation" class="columns small-7 h-a">

			<ul id="redes_sociales" class="small-12 columns p-0 m0 font-m font-md-l text-center">
				<?php
				$red = array('github','soundcloud','twitter','instagram','vimeo','youtube');
				$link = array(
					'http://www.github.com/josecaos',
					'http://www.soundcloud.com/josecaos',
					'http://www.twitter.com/josecaos',
					'http://www.instagram.com/josecaos',
					'http://www.vimeo.com/josecaos',
					'http://www.youtube.com/mixfuckedupmac'
				);

				for ($i=0; $i < 6; $i++):

					?>
					<li class="columns small-2 p-0 h-100 align-middle">

						<a href="<?php echo $link[$i]?>" target="_blank" class="columns p-0 h-a">
							<i class="fa fa-<?php echo $red[$i]?>"></i>
						</a>

					</li>

				<?php endfor; ?>
			</ul>
		</nav>

		<div class="row expanded small-5 align-middle">
			<div class="copyright columns h-a text-right m0 p2 font-xxs font-md-m">
				&nbsp; Mixfuckedup	&copy;  <?php echo date('Y');?> &nbsp; <?php  //bloginfo('name'); ?>
			</div>
		</div>

	</div> <!-- end #inner-footer -->
</footer> <!-- end .footer -->
<?php wp_footer(); ?>
</body>
</html> <!-- end page -->
