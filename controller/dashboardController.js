app.controller('dashboardcontrolr', function($scope, $mdDialog) {
      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'templates/dialogBox.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
      };

      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
      }
      });
