app.controller('deletcard', function($scope, jsonRead, $state, $rootScope) {
  //   localStorage.setItem('todos', JSON.stringify($scope.jsonProduct));
//$rootScope.deletedList=[];
  $rootScope.saved = JSON.parse(localStorage.getItem('jsonData'));
  console.log("saved data in saved rootscope variable ", $rootScope.saved);

    $rootScope.deletedList=[];//JSON.parse(localStorage.getItem('jsonDatadeleted'));
    $rootScope.nondeletedList=[];
    $rootScope.nondeletedList=$rootScope.saved;

    // console.log("deeletepage Controler ",$rootScope.deletedList);
$scope.remove = function(items,deletedList,nondeletedList) {
  var lengt=$rootScope.nondeletedList.length;
// $rootScope.deletedList= JSON.parse(localStorage.getItem('jsonDatadeleted'));
console.log("before pushing in deletedList ",$rootScope.deletedList);
  console.log("lengt ",lengt);
  for(var i=0;i<lengt;i++){
    var value=$rootScope.nondeletedList[i];
    if(value==items){
      $rootScope.deletedList.push(items);
      localStorage.setItem('jsonDatadeleted', JSON.stringify($rootScope.deletedList));
      console.log("deletedList ",$rootScope.deletedList);
      var index = $rootScope.nondeletedList.indexOf(items);
      $rootScope.nondeletedList.splice(index,1);
      console.log(" nondeletedList ",$rootScope.nondeletedList);
      localStorage.setItem('jsonData', JSON.stringify( $rootScope.nondeletedList));
      $rootScope.saved=JSON.parse(localStorage.getItem('jsonData'));
    }
  }

};

});
