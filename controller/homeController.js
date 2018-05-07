app.controller('homeController', function($scope, $mdSidenav,jsonRead,$state) {
  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  };
      $scope.readjson=jsonRead.read();
    $scope.readjson.then(function(response){
      //  console.log($scope.jsonFile);
      $scope.jsonData=response.data;
    })
    $state.go('home.dashboard');

});
