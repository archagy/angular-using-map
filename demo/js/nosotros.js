$(document).ready(function() {

$('.flexslider').flexslider({
	animation: "fade"
});

$('.flexslider .flex-control-nav').hide();

/* $( "#drag" ).draggable({ axis: "x" }); */

contador = 1;

$('.handle2').click(function(){
	if (contador<=8){
		$('#drag').animate({ left:'-=250' },300);
		contador++;
	}
	return false;
});

$('.handle1').click(function(){
	if (contador>1){
		$('#drag').animate({ left:'+=250' },300);
		contador--;
	}
	return false;
});


});