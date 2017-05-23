var styles = [
	{
		featureType: "water",
		elementType: "all",
		stylers: [

		]
	}
];
function koparmap() {
    var latlng = new google.maps.LatLng(25.666546, -100.282572);
    var myOptions = {
      zoom: 4,
      /* zoomControl: false, */
      scaleControl: false,
      scrollwheel: false,
      center: latlng,
      mapTypeControlOptions: {
		mapTypeIds: [ 'map_canvas']
		},
      mapTypeId: 'map_canvas',
	   
	  mapTypeControl: true,
   	  mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
    },

    
	  
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'map_canvas' });
	map.mapTypes.set('map_canvas', styledMapType)
	
	
	var content_mty = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Monterrey</h1>'+
        '<div id="bodyContent">'+
        '<p>Tomas Alba Edison 3116, Fracc. Industrial, Monterrey, N.L. C.P. 64440</p>' +
        '</div>'+
        '</div>';
    var infowindow_mty = new google.maps.InfoWindow({
        content: content_mty,
		maxWidth: 270
    });
    var marker_mty = new google.maps.Marker({
        position: new google.maps.LatLng (25.706781,-100.33335),
        map: map,
        icon:"images/marker.png",
        title: 'Monterrey'
    });
    google.maps.event.addListener(marker_mty, 'click', function() {
      infowindow_mty.open(map,marker_mty);
    });
    
    var content_mex = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar México</h1>'+
        '<div id="bodyContent">'+
        '<p>Viveros de la Floresta 61, Col. Viveros de la Loma, Tlalnepantla, Edo. de México C.P. 54080</p>' +
        '</div>'+
        '</div>';
    var infowindow_mex = new google.maps.InfoWindow({
        content: content_mex,
		maxWidth: 270
    });
    var marker_mex = new google.maps.Marker({
        position: new google.maps.LatLng (19.5231,-99.218098),
        map: map,
        icon:"images/marker.png",
        title: 'México'
    });
    google.maps.event.addListener(marker_mex, 'click', function() {
      infowindow_mex.open(map,marker_mex);
    });
    
    var content_queretaro = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Querétaro</h1>'+
        '<div id="bodyContent">'+
        '<p>General Lázaro Cárdenas 408, Col. Ampliación Cimatario, Querétaro, Qro. C.P. 76030</p>' +
        '</div>'+
        '</div>';
    var infowindow_queretaro = new google.maps.InfoWindow({
        content: content_queretaro,
		maxWidth: 270
    });
    var marker_queretaro = new google.maps.Marker({
        position: new google.maps.LatLng (20.578332, -100.389220),
        map: map,
        icon:"images/marker.png",
        title: 'Querétaro'
    });
    google.maps.event.addListener(marker_queretaro, 'click', function() {
      infowindow_queretaro.open(map,marker_queretaro);
    });
    
    var content_celaya = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Celaya</h1>'+
        '<div id="bodyContent">'+
        '<p>Av. México-Japón #412 Int. 15, Fracc. Ciudad Industrial, Celaya, Gto. C.P. 38010</p>' +
        '</div>'+
        '</div>';
    var infowindow_celaya = new google.maps.InfoWindow({
        content: content_celaya,
		maxWidth: 270
    });
    var marker_celaya = new google.maps.Marker({
        position: new google.maps.LatLng (20.550072,-100.79587),
        map: map,
        icon:"images/marker.png",
        title: 'Celaya'
    });
    google.maps.event.addListener(marker_celaya, 'click', function() {
      infowindow_celaya.open(map,marker_celaya);
    });
    
    var content_gdl = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Guadalajara</h1>'+
        '<div id="bodyContent">'+
        '<p>Reforma 1308, Col. Sta. Teresita, Guadalajara, Jal. C.P. 44600</p>' +
        '</div>'+
        '</div>';
    var infowindow_gdl = new google.maps.InfoWindow({
        content: content_gdl,
		maxWidth: 270
    });
    var marker_gdl = new google.maps.Marker({
        position: new google.maps.LatLng (20.6799722, -103.3664308),
        map: map,
        icon:"images/marker.png",
        title: 'Guadalajara'
    });
    google.maps.event.addListener(marker_gdl, 'click', function() {
      infowindow_gdl.open(map,marker_gdl);
    });
    
    /*var content_puebla = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Puebla</h1>'+
        '<div id="bodyContent">'+
        '<p>Calle Chalchicomula 7, Col. La Paz, Puebla, Puebla. C.P. 72160</p>' +
        '</div>'+
        '</div>';
    var infowindow_puebla = new google.maps.InfoWindow({
        content: content_puebla,
		maxWidth: 270
    });
    var marker_puebla = new google.maps.Marker({
        position: new google.maps.LatLng (19.055971, -98.231565),
        map: map,
        icon:"images/marker.png",
        title: 'Puebla'
    });
    google.maps.event.addListener(marker_puebla, 'click', function() {
      infowindow_puebla.open(map,marker_puebla);
    });*/
    
    var content_saltillo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Saltillo</h1>'+
        '<div id="bodyContent">'+
        '<p>Isidro López Zertuche #972 Int. 5, Col. Villa Olímpica Poniente, Saltillo, Coahuila C.P. 25230</p>' +
        '</div>'+
        '</div>';
    var infowindow_saltillo = new google.maps.InfoWindow({
        content: content_saltillo,
		maxWidth: 270
    });
    var marker_saltillo = new google.maps.Marker({
        position: new google.maps.LatLng (25.46248,-100.991392),
        map: map,
        icon:"images/marker.png",
        title: 'Saltillo'
    });
    google.maps.event.addListener(marker_saltillo, 'click', function() {
      infowindow_saltillo.open(map,marker_saltillo);
    });
    
    var content_itech = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">ITECH Automation Solutions, Inc.</h1>'+
        '<div id="bodyContent">'+
        '<p>9512 Carnegie Ave., El Paso, TX. USA 79925</p>' +
        '</div>'+
        '</div>';
    var infowindow_itech = new google.maps.InfoWindow({
        content: content_itech,
		maxWidth: 270
    });
    var marker_itech = new google.maps.Marker({
        position: new google.maps.LatLng (31.795745, -106.358296),
        map: map,
        icon:"images/marker.png",
        title: 'ITECH'
    });
    google.maps.event.addListener(marker_itech, 'click', function() {
      infowindow_itech.open(map,marker_itech);
    });
    
    var content_itrade = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">ITRADE, Inc. Mailing Address</h1>'+
        '<div id="bodyContent">'+
        '<p>410 E. Hillside 293 Laredo, TX. USA. 78041</p>' +
        '</div>'+
        '</div>';
    var infowindow_itrade = new google.maps.InfoWindow({
        content: content_itrade,
		maxWidth: 270
    });
    var marker_itrade = new google.maps.Marker({
        position: new google.maps.LatLng (27.5464689, -99.4936755),
        map: map,
        icon:"images/marker.png",
        title: 'ITRADE'
    });
    google.maps.event.addListener(marker_itrade, 'click', function() {
      infowindow_itrade.open(map,marker_itrade);
    });
    
    var content_costarica = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kopar Costa Rica</h1>'+
        '<div id="bodyContent">'+
        '<p>Edificio Gran Campo oficina 6, Av. Las Américas, Sabana Norte, San José Costa Rica.</p>' +
        '</div>'+
        '</div>';
    var infowindow_costarica = new google.maps.InfoWindow({
        content: content_costarica,
		maxWidth: 270
    });
    var marker_costarica = new google.maps.Marker({
        position: new google.maps.LatLng (9.938404, -84.107332),
        map: map,
        icon:"images/marker.png",
        title: 'Costa Rica'
    });
    google.maps.event.addListener(marker_costarica, 'click', function() {
      infowindow_costarica.open(map,marker_costarica);
    });

	
}

$(document).ready(function() {
	koparmap();
});