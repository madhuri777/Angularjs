var app= angular.module('MyApp',['ui.router','ngMaterial']);
app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider

  .state('login',{
    url:'/login',
    templateUrl:'templates/Login.html',
    controller:'loginController'
  })
  .state('home',{
    url:'/home',
    templateUrl:'templates/Home.html',
    controller:'homeController'
  });
  $urlRouterProvider.otherwise('/login');
});
