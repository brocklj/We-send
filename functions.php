<?php
add_theme_support( 'custom-logo', array(
	'height'      => 100,
	'width'       => 400,
	'flex-height' => true,
	'flex-width'  => true,
	'header-text' => array( 'site-title', 'site-description' ),
) );

	// This theme uses wp_nav_menu().
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'We-send' ),
	) );

	function get_menu() {
	# Change 'menu' to your own navigation slug.
	$menu_name = 'primary';
	$locations = get_nav_menu_locations();
	$menu_id = $locations[ $menu_name ] ;
	return	wp_get_nav_menu_items($menu_id);
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'app', 'settings', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );

// Register We-send theme widgets
function wesend_register_widgets() {

	register_sidebar( array(
		'name' => __( 'Footer bar', 'we-send' ),
		'id' => 'footer_bar',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="footer-header">',
		'after_title' => '</h3>'
	));

	register_sidebar( array(
		'name' => __( 'Home page greeting panel', 'we-send' ),
		'id' => 'home_greet_panel',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="footer-header">',
		'after_title' => '</h3>'
	));

}
add_action( 'widgets_init', 'wesend_register_widgets' );

add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );