app.controller('deletecontrl', function($rootScope, $scope, $state) {

  //console.log("jhdfhsdfgs ",$rootScope.deletedList);
//  if($rootScope.deletedList)
  //localStorage.setItem('jsonDatadeleted', JSON.stringify($rootScope.deletedList));
  $rootScope.listOfItem = JSON.parse(localStorage.getItem('jsonDatadeleted'));
  localStorage.setItem('jsonDatadeleted', JSON.stringify($rootScope.listOfItem));
  console.log("list of item on last page ", $scope.listOfItem);
  $scope.delete = function(item) {
    var index = $scope.listOfItem.indexOf(item);
    console.log($scope.listOfItem);
    $scope.listOfItem.splice(index, 1);
    localStorage.setItem('jsonDatadeleted', JSON.stringify($scope.listOfItem));
    $scope.listOfItem = JSON.parse(localStorage.getItem('jsonDatadeleted'));
    console.log("list of deleted items ", $scope.listOfItem);

    $state.go('conform');
  };
  $scope.undo = function(item) {
    console.log("undo contains ", $rootScope.nondeletedList);
    var index = $scope.listOfItem.indexOf(item);
    console.log($scope.listOfItem);
    $scope.listOfItem.splice(index, 1);
    localStorage.setItem('jsonDatadeleted', JSON.stringify($scope.listOfItem));
    $scope.listOfItem = JSON.parse(localStorage.getItem('jsonDatadeleted'));
    // $rootScope.nondeletedList = JSON.parse(localStorage.getItem('jsonData'));
    $rootScope.nondeletedList.push(item);
    console.log("undo contains after adding ", $rootScope.nondeletedList);
    localStorage.setItem('jsonData', JSON.stringify($rootScope.nondeletedList));
    $rootScope.nondeletedList = JSON.parse(localStorage.getItem('jsonData'));
    console.log("undo data on previous  page ", $rootScope.nondeletedList);
    $state.go('deletpage');
  }
});
