$(document).ready(function() {

// cache container
var $container = $('#prods');

// initialize isotope
$container.isotope({
	animationEngine : 'jquery',
	animationOptions: {
		duration: 800,
		easing: 'easeOutExpo',
		queue: false
	},
	layoutMode : 'masonry'
});

// filter items when filter link is clicked
$('.pClicks a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

$(".pBlock img").center();



var ruta = window.location.href;
var elemEnlace = ruta.split('#').pop();
if(elemEnlace == 'todos'){
	$('.todos').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'actuadores'){
	$('.actuadores').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'valvulas-neumaticas'){
	$('.valvulas-neumaticas').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'valvulas-proceso'){
	$('.valvulas-proceso').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'tec-vacio'){
	$('.tec-vacio').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'tratamiento-aire'){
	$('.tratamiento-aire').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'valvulas-hierro'){
	$('.valvulas-hierro').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'conexiones-mangueras'){
	$('.conexiones-mangueras').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'aluminio-est'){
	$('.aluminio-est').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'amortiguadores'){
	$('.amortiguadores').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'robots'){
	$('.robots').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'electronica'){
	$('.electronica').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'control-neumatico'){
	$('.control-neumatico').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'sensores'){
	$('.sensores').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'vibradores'){
	$('.vibradores').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'accesorios'){
	$('.accesorios').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'manejo-material'){
	$('.manejo-material').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'sistemas-robotico-etiquetado'){
	$('.sistemas-robotico-etiquetado').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'sistemas-pesaje'){
	$('.sistemas-pesaje').click();
	$.scrollTo('.pThumbs',500);
} else if(elemEnlace == 'motores-aire'){
	$('.motores-aire').click();
	$.scrollTo('.pThumbs',500);
}



});