$(document).ready(function(){


new FormValidator('formacoti', [{
    name: 'Name',
    display: 'nombre',    
    rules: 'required'
}, {
    name: 'Email',
    display: 'de email',
    rules: 'required'
}, {
    name: 'Tel',
    display: 'telefono',
    rules: 'required'

}, {
    name: 'Message',
    display: 'de comentario',
    rules: 'required'

}], function(errors, event) {
    var SELECTOR_ERRORS = $('.error_box'),
        SELECTOR_SUCCESS = $('.success_box');
        
    if (errors.length > 0) {
        SELECTOR_ERRORS.empty();
        
        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            SELECTOR_ERRORS.append(errors[i].message + '<br />');
        }
        
        SELECTOR_SUCCESS.css({ display: 'none' });
        SELECTOR_ERRORS.fadeIn(200);
    } else {
        SELECTOR_ERRORS.css({ display: 'none' });
        SELECTOR_SUCCESS.fadeIn(200);
    }
    /*
    if (event && event.preventDefault) {
        event.preventDefault();
    } else if (event) {
        event.returnValue = true;
    }
    */
});




    
var ruta = window.location.href;
var elemEnlace = ruta.split('#').pop();
if(elemEnlace == "gracias"){
	$('.gracias').slideDown(300,function(){
		$(this).delay(5000).slideUp(300);
	});
} else if (elemEnlace == "error"){
	$('.noenviado').slideDown(300,function() {
		$(this).delay(5000).slideUp(300);
	});
}


    
});