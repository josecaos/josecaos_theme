<!-- By default, this menu will use off-canvas for small
and a topbar for medium-up -->

<div class="top-bar fondo_negro p2 h_full" id="top-bar-menu">

	<div class="small-8 columns top-bar fondo_negro h_full align-middle p0">
		<a class="logo_texto color_naranja_c" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
	</div>

	<!-- -->
	<div id="botones_header" class="small-4 columns align-right p0 h_full ">	<!-- muestra siempre menu mobil-->

		<div class="small-9 columns text-right columns menu fondo_transparente h_full">
			<a data-open="offCanvasLeft" class="fontRXL color_naranja_c h_full"><i class="fa fa-reorder"></i></a>
		</div>
		<?php //joints_top_nav(); ?>

		<div class="small-3 columns menu fondo_transparente h_full contacto">
			<a data-open="offCanvasRight" class="fontRXL color_naranja_c h_full text-right"><i class="fa fa-envelope"></i></a> <!-- data-toggle="off-canvas" -->
		</div>

	</div>
<!--  -->

</div>
