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
      //controller:'dashboardController'
    });
  $urlRouterProvider.otherwise('login');
});
