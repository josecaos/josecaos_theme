<!-- By default, this menu will use off-canvas for small
and a topbar for medium-up -->

<div class="top-bar fondo_naranja_o pl0 h_full" id="top-bar-menu">
	<div class="small-8 columns top-bar fondo_naranja_o pl0 h_full align-middle p0">
		<a class="menu_texto color_naranja_c" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
	</div>
	<!-- show-for-medium -->
	<div class="small-2 columns text-right p0 h_full">	<!-- muestra siempre menu mobil-->
		<div class="small-12 menu fondo_transparente h_full">
			<a data-open="offCanvasLeft" class="fontRXL color_naranja_c h_full" ><i class="fa fa-reorder"></i></a>
		</div>
		<?php //joints_top_nav(); ?>
	</div>
	<div class="small-2 columns text-right p0 h_full">
		<div class="small-12 menu fondo_transparente h_full contacto">
			<!-- <li><a class="menu-icon" type="button" data-open="offCanvasRight"></a></li> -->
			<a data-open="offCanvasRight" class="fontRXL color_naranja_c h_full text-right"><i class="fa fa-envelope"></i></a> <!-- data-toggle="off-canvas" -->
		</div>
	</div>
</div>
