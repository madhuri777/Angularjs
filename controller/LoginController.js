app.controller('loginController', function($scope, $state) {

  var email = $scope.email;
  var password = $scope.password;
  $scope.home = function() {
    if (email != '' && password != '') {
      $state.go('home');
    } else {
      // document.getElementById("error").innerHTML = "<span class='errorMessage'>*Enter Correct Email/Password</span>";
       $scope.error="Invalid email/password";
    }
  };

});
