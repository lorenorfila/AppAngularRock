'use strict';

/**
 * @ngdoc overview
 * @name appMusicaApp
 * @description
 * # appMusicaApp
 *
 * Main module of the application.
 */
angular
  .module('appMusicaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'youtube-embed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
        controller: 'FooCtrl',
        controllerAs: 'foo'
      })
      .when('/bar', {
        templateUrl: 'views/bar.html',
        controller: 'BarCtrl',
        controllerAs: 'bar'
      })
      .when('/the-rolling-stones', {
        templateUrl: 'views/the-rolling-stones.html',
        controller: 'TheRollingStonesCtrl',
        controllerAs: 'theRollingStones'
      })
      .when('/the-beatles', {
        templateUrl: 'views/the-beatles.html',
        controller: 'TheBeatlesCtrl',
        controllerAs: 'theBeatles'
      })
      .when('/queen', {
        templateUrl: 'views/queen.html',
        controller: 'QueenCtrl',
        controllerAs: 'queen'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
