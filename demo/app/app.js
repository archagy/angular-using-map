var app = angular.module('map', ['rwdImageMaps','mgcrea.ngStrap', 'ngRoute','ngMapHilight']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/indexmap.html",
            controller: 'IndexMap'
        })
});



function cleanCanvas () {
    $('img.rwdimgmap').removeAttr('style');
    $('canvas').remove();
}



function loadGif (gifName) {
    var time = Math.floor(Date.now() / 1000);
    cleanCanvas();
    $('img.rwdimgmap').attr('src','../img/gif/'+gifName+'.gif?cache='+time);
    
}

