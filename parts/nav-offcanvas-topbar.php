<!-- By default, this menu will use off-canvas for small
and a topbar for medium-up -->

<div class="top-bar fondo_naranja_o" id="top-bar-menu">
	<div class="small-8 columns float-left fondo_transparente">
		<ul class="menu fondo_transparente">
			<li class="menu-text"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></li>
		</ul>
	</div>
	<!-- show-for-medium -->
	<div class="small-2 columns text-right">	<!-- show-for-medium top-bar-right-->
		<div class="small-12 menu fondo_transparente">
			<a data-open="offCanvasLeft" class="fontRXXL color_naranja_c " ><i class="fa fa-reorder"></i></a>
		</div>
		<?php //joints_top_nav(); ?>
	</div>
	<div class="small-2 columns text-right">
		<div class="small-12 contacto">
			<!-- <li><a class="menu-icon" type="button" data-open="offCanvasRight"></a></li> -->
			<a data-open="offCanvasRight" class="fontRXXL color_naranja_c text-right pl2"><i class="fa fa-envelope"></i></a> <!-- data-toggle="off-canvas" -->
		</div>
	</div>
</div>
