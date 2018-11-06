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
<link rel="stylesheet" href="./style.css" crossorigin="anonymous">
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

  <div id="app" class="container"></div>
  <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/main.bundle.js"></script>

</body>
</html>