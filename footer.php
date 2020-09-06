</main>
<!-- fin contenedor -->


<footer class="container-fluid">

	<div id="inner-footer" class="row">

		<nav role="navigation" class="col-xs-12 col-sm-7">

			<ul id="redes_sociales" class="col-12">
				<?php
				$red = array('github', 'soundcloud', 'twitter', 'instagram', 'vimeo', 'youtube');
				$link = array(
					'http://www.github.com/josecaos',
					'http://www.soundcloud.com/josecaos',
					'http://www.twitter.com/josecaos',
					'http://www.instagram.com/josecaos',
					'http://www.vimeo.com/mixfuckedup',
					'http://www.youtube.com/mixfuckedupmac'
				);

				for ($i = 0; $i < 6; $i++) :

				?>
					<li class="col-xs-12 col-2 ">

						<a href="<?php echo $link[$i] ?>" target="_blank" class="col-12">
							<i class="fa fa-<?php echo $red[$i] ?>"></i>
						</a>

					</li>

				<?php endfor; ?>
			</ul>
		</nav>

			<div class="copyright col-xs-12 col-sm-5">
				&nbsp; <a href="http://mixfuckedup.net">Mixfuckedup</a> &copy; <?php echo date('Y'); ?> &nbsp; <?php  //bloginfo('name'); ?>
			</div>

	</div>
</footer>
<?php wp_footer(); ?>
</body>

</html>