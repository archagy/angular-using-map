app.controller('IndexMap', function($scope,$timeout,$location,$modal,$compile){
var MAP_PATH = "app/views/maps/";
$scope.bkg='../img/start.png';

$scope.maphilight = function (view) {
    $('#map').maphilight();
};


$scope.loadMap = function (view) {
    $scope.template= MAP_PATH+view+'.html';
    $timeout($scope.maphilight,1000);
}


$scope.modal = function () {
    $modal({
        show: true,
        animation: 'am-fade-and-scale',
        placement: 'center',
        templateUrl: 'modal.html'
    });
};



$scope.view1 = function () {  
    $(".rwdimgmap").attr("src","../img/1.png");
    loadGif('noloop1');
    $scope.loadMap('viewMap1');
    $scope.backFlag = true;
    $scope.backGif = 'noloop1_reverse';
    $scope.btn1="btn-primary";
};

$scope.view2 = function () {  
    loadGif('noloop2');
    $scope.loadMap('viewMap2');
    $scope.backFlag = true;
    $scope.backGif = 'noloop2_reverse';
    $scope.btn1="btn-primary";
};

$scope.view3 = function () {  
    loadGif('noloop3');
    $scope.loadMap('viewMap3');
    $scope.backFlag = true;
    $scope.backGif = 'noloop3_reverse';
    $scope.btn1="btn-primary";
};

$scope.view4 = function () {  
    loadGif('noloop4');
    $scope.loadMap('viewMap4');
    $scope.backFlag = true;
    $scope.backGif = 'noloop4_reverse';
    $scope.btn1="btn-primary";
};

$scope.back = function () {
    loadGif($scope.backGif);
    $scope.loadMap('index');
    $scope.backFlag = false;
    $scope.btn1="btn-default";
    $scope.btn2="btn-default";
    $scope.btn3="btn-default";
    $scope.bkg='../img/start.png';

};




//main - run
$scope.loadMap('index');
$scope.backFlag = false;
$scope.backGif = '';
$scope.btn1="btn-default";
$scope.btn2="btn-default";
$scope.btn3="btn-default";


});