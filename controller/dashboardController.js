app.controller('dashboardcontrolr', function($scope, $mdDialog) {
      $scope.showAdvanced = function(ev,items) {
        console.log("event ",ev);
        $mdDialog.show({
          locals:{item:items},
            controller: DialogController,
            templateUrl: 'templates/dialogBox.html',
            parent: angular.element(document.body),
            targetEvent: ev,

            clickOutsideToClose: false,
            fullscreen: $scope.customFullscreen
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
          // console.log("items ",items);
          // console.log("item ",item);
      };

      function DialogController($scope, $mdDialog,item) {
        $scope.item=item;
        $scope.hide = function() {
          $mdDialog.hide();
        }
        $scope.cancel = function() {
        $mdDialog.cancel();
      }

    };


      });
