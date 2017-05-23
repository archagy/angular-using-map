$(document).ready(function() {

$(".pBlock img").center();

var $item = $('.pBlock');


$('.click-todos').click(function() {
	$item.fadeIn(300);
	return false;
});
$('.click-valvulas-neumaticas').click(function() {
	$item.fadeOut(300,function() {
		$('.valvulas-neumaticas').fadeIn(300);
	});
	return false;
});	
$('.click-valvulas-proceso').click(function() {
	$item.fadeOut(300,function() {
		$('.valvulas-proceso').fadeIn(300);
	});
	return false;
});
$('.click-actuadores').click(function() {
	$item.fadeOut(300,function() {
		$('.actuadores').fadeIn(300);
	});
	return false;
});
$('.click-tratamiento-aire').click(function() {
	$item.fadeOut(300,function() {
		$('.tratamiento-aire').fadeIn(300);
	});
	return false;
});
$('.click-transpo-accesorios').click(function() {
	$item.fadeOut(300,function() {
		$('.transpo-accesorios').fadeIn(300);
	});
	return false;
});
$('.click-sistemas-presion').click(function() {
	$item.fadeOut(300,function() {
		$('.sistemas-presion').fadeIn(300);
	});
	return false;
});
$('.click-sensores').click(function() {
	$item.fadeOut(300,function() {
		$('.sensores').fadeIn(300);
	});
	return false;
});
$('.click-robots').click(function() {
	$item.fadeOut(300,function() {
		$('.robots').fadeIn(300);
	});
	return false;
});
$('.click-redes').click(function() {
	$item.fadeOut(300,function() {
		$('.redes').fadeIn(300);
	});
	return false;
});
$('.click-tolvas').click(function() {
	$item.fadeOut(300,function() {
		$('.tolvas').fadeIn(300);
	});
	return false;
});
$('.click-amortiguadores').click(function() {
	$item.fadeOut(300,function() {
		$('.amortiguadores').fadeIn(300);
	});
	return false;
});
$('.click-aluminio').click(function() {
	$item.fadeOut(300,function() {
		$('.aluminio').fadeIn(300);
	});
	return false;
});



});