$(document).ready(function() {


$('.hazlaprueba, .casos-exito, .haz-cita').slideUp();

function quitaSel() {
	$('.cprBtn1, .cprBtn2, .cprBtn3, .cprBtn4').removeClass('cprSel');
}

$('.cprBtn1').click(function() {
	$.scrollTo('.cprWrap',500);
	$('.hazlaprueba, .casos-exito, .haz-cita').slideUp();
	$('.como-funciona').slideDown();
	quitaSel();
	$(this).addClass('cprSel');
	return false;
});

$('.cprBtn2').click(function() {
	$.scrollTo('.cprWrap',500);
	$('.como-funciona, .casos-exito, .haz-cita').slideUp();
	$('.hazlaprueba').slideDown();
	quitaSel();
	$(this).addClass('cprSel');
	return false;
});

$('.cprBtn3').click(function() {
	$.scrollTo('.cprWrap',500);
	$('.como-funciona, .hazlaprueba, .haz-cita').slideUp();
	$('.casos-exito').slideDown();
	quitaSel();
	$(this).addClass('cprSel');
	return false;
});

$('.cprBtn4').click(function() {
	$.scrollTo('.cprWrap',500);
	$('.como-funciona, .hazlaprueba, .casos-exito').slideUp();
	$('.haz-cita').slideDown();
	quitaSel();
	$(this).addClass('cprSel');
	return false;
});


function casoSel() {
	$('.btnCaso1, .btnCaso2, .btnCaso3').removeClass('sel');
}

$('.caso2, .caso3').fadeOut().hide(0);

$('.btnCaso1').click(function() {
	$('.caso2, .caso3').fadeOut(400,function() {
		$('.caso1').fadeIn(400);
	});
	casoSel();
	$(this).addClass('sel');
	return false;
});

$('.btnCaso2').click(function() {
	$('.caso1, .caso3').fadeOut(400,function() {
		$('.caso2').fadeIn(400);
	});
	casoSel();
	$(this).addClass('sel');
	return false;
});

$('.btnCaso3').click(function() {
	$('.caso1, .caso2').fadeOut(400,function() {
		$('.caso3').fadeIn(400);
	});
	casoSel();
	$(this).addClass('sel');
	return false;
});




});