<!-- By default, this menu will use off-canvas for small
	 and a topbar for medium-up -->

<div class="top-bar" id="top-bar-menu">
	<div class="small-8 columns top-bar-left float-left">
		<ul class="menu">
			<li class="menu-text"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></li>
		</ul>
	</div>
	<div class="small-4 columns top-bar-right show-for-medium">
		<div class="small-`2` contacto">
			<!-- <li><a class="menu-icon" type="button" data-open="offCanvasRight"></a></li> -->
			<a data-open="offCanvasRight" ><i class="fa fa-envelope"></i></a> <!-- data-toggle="off-canvas" -->
		</div>
		 <!-- <? joints_top_nav(); ?> 	  -->
		 <li><a data-open="offCanvasLeft" ></a><i class="fa fa-reorder"></i></li> <!-- data-toggle="off-canvas" -->
	</div>
	<div class="small-4 columns top-bar-right float-right show-for-small-only">
		<ul class="small-3 menu">
			<!-- <li><a class="menu-icon" type="button" data-open="offCanvasLeft"></a></li> -->
			<li><a data-open="offCanvasLeft" ></a><i class="fa fa-reorder"></i></li> <!-- data-toggle="off-canvas" -->
		</ul>
	</div>
</div>
