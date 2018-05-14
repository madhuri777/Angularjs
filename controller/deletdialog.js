app.controller('deletecontrl', function($rootScope,$scope,$state) {
       $scope.delete=function(item){
          //console.log("item before delet ",$rootScope.jsonProduct);
          // console.log("item in delet ",item);
          // console.log("item id ",id);
          var index=$rootScope.saved.indexOf(item);
          console.log($rootScope.saved);
          $rootScope.saved.splice(index,1);
          localStorage.setItem('jsonData', JSON.stringify(   $rootScope.saved));
          $rootScope.saved =  JSON.parse(localStorage.getItem('jsonData'));
         console.log("saved ",$rootScope.saved);
          //localStorage.removeItem();

            // console.log("item after delet ", localStorage.removeItem('item'));
            $state.go('deletpage');
       };
       $scope.undo=function(){
           $state.go('deletpage');
       }
      });
