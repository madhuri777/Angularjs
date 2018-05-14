app.controller('deletcard', function($scope, jsonRead, $state, $rootScope) {

  //   localStorage.setItem('todos', JSON.stringify($scope.jsonProduct));
  $rootScope.saved = JSON.parse(localStorage.getItem('jsonData'));
  console.log("saved ", $rootScope.saved);


  $scope.remove = function(items) {
    $rootScope.values = items;
    $state.go('conform');
  };



});
