<?php
/*
Theme Name: We-send
Theme URI: #
Author: Jakub Brockl
Author URI: https://github.com/brocklj
Description: Fast Wordpress SPA template using React.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: fast, template, React, SPA, Single Page Application
Text Domain: we-send


*/
?>
<!doctype html>
<html lang="cs">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css" crossorigin="anonymous">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
    crossorigin="anonymous">
  <title>We-send App</title>
</head>

<body>
  <?php 	$menu_name = 'primary';
	$locations = get_nav_menu_locations();
	$menu_id = $locations[ $menu_name ] ;
	$primaty_nav = wp_get_nav_menu_items($menu_id); ?>
  <?php
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $custom_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );
  ?>
  <script>
    var appSettings = {
      path: '<?php echo esc_url( get_home_url() ); ?>',
      logo_src: '<?php echo esc_url($custom_logo_url) ?>',
      nav_menu: <?php echo json_encode($primaty_nav)?>,
    };
  </script>

  <div id="app" class="container"></div>
  <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/main.bundle.js"></script>

</body>
</html>