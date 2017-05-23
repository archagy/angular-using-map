<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Prueba Responsiva mapa con angular</title>
	<link href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="app/global.css">
	<link rel="stylesheet" href="css/flexslider.css" type="text/css">

	<script src="../../node_modules/jquery/dist/jquery.js"</script>

<script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../../dist/maphilight.min.js"></script>



<script src="../../node_modules/angular/angular.js"></script>

<script src="../../node_modules/angular-route/angular-route.js"></script>
<script src="../../angular-rwdImageMaps.min.js"></script>
<script src="../../bower_components/angular-maphilight/lib/angular.maphilight.min.js"></script>

<script src="../../dist/angular-strap.min.js"></script>
<script src="../../dist/angular-strap.tpl.min.js"></script>

<script src="app/app.js"></script>
<script src="app/controllers/IndexMap.js"></script>

</head>


<body ng-app="map" >
	<?php include('top.php'); ?>
	<?php include('header.php'); ?>

<div class="treinta">
	<div class="center">
	<div class="row fg-no-gutter">
		<div class="fg12">30 años de experiencia</div>
	</div>
	</div>
</div>

<section class="prodst">
	<div ng-view></div>
</section>
</body>
</html>



















