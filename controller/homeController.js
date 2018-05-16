app.controller('homeController', function($scope, $mdSidenav,jsonRead,$state,$rootScope) {
  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  };
      $scope.readjson=jsonRead.read();
    $scope.readjson.then(function(response){
      $scope.jsonData=response.data;
      localStorage.setItem('jsonData', JSON.stringify($scope.jsonData));

    })
    $state.go('home.dashboard');


   $scope.manufacturerArray=[];
   //console.log($scope.manufacturerArray);
   $scope.storageArray=[];
   $scope.osArray=[];
   $scope.cameraArray=[];

   $scope.toggle = function (item, list) {
       var idx = list.indexOf(item);
       if (idx > -1) {
         list.splice(idx, 1);
         console.log("list ",list);
       }
       else {
         list.push(item);
       }
     };

     $scope.exists = function (item, list) {
       return list.indexOf(item) > -1;
     };
  //  $state.go('deletpage');
});
