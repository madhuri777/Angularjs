var app = angular.module('MyApp', ['ui.router', 'ngMaterial']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/Login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/Home.html',
      controller: 'homeController'
    })
    .state('home.dashboard',{
      url:'/home.dashboard',
      templateUrl:'templates/dashboard.html',
      controller:'dashboardcontrolr'
    })
    .state('deletpage',{
      url:'/deletpage',
      templateUrl:'templates/deletcard.html',
      controller:'deletcard'
  })
     .state('conform',{
      url:'/conformpage',
      templateUrl:'templates/view.html',
     controller:'deletecontrl'
     });
  $urlRouterProvider.otherwise('login');
});
