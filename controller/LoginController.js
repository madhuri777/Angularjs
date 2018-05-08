app.controller('loginController', function($scope, $state) {
  $scope.home = function(email,password) {
  var mailid=$scope.email;
  var passwd=$scope.password;
  console.log(mailid);
  console.log(passwd);
   $state.go('home');
     //if (mailid != '' && passwd!= '') {
    //   console.log(mailid);
    //   console.log(passwd);
    //   //$state.go('home');
    //   $state.transitionTo('home');
    // } else {
    //    $scope.error="Invalid email/password";
    // }
  };

});
