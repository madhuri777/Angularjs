app.controller('loginController', function($scope, $state) {
  $scope.home = function(email,password) {
  var mailid=$scope.email;
  var passwd=$scope.password;
  console.log(mailid);
  console.log(passwd);
   $state.go('home');
  };

});
