<sidebar class="columns small-12 medium-4 large-3 h-75-v text-center">



  <div class="columns text-center">
    <!-- contador aqui desde js -->
	<?php if ( is_active_sidebar( 'caos-1-sidebar' ) ) : ?>

		<?php dynamic_sidebar( 'caos-1-sidebar' ); ?>

	<?php else : ?>

	<!-- This content shows up if there are no widgets defined in the backend. -->

	<div class="alert help">
		<p><?php _e( 'Activa algún Widget.', 'caostheme' );  ?></p>
	</div>

	<?php endif; ?>

</div>

<div class="numeros h-a p-t-0-1 columns text-center">
	<!-- contador aqui desde js -->
</div>


</sidebar>
