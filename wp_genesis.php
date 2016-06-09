// Remove default sidebar text
remove_action( 'genesis_sidebar', 'genesis_do_sidebar' );
add_action( 'genesis_sidebar', 'beatminded_do_default_sidebar' );

/**
 * Echo primary sidebar default content.
 */
function beatminded_do_default_sidebar() {
	if ( ! dynamic_sidebar( 'sidebar' ) ) {
		echo '';
	}
}
