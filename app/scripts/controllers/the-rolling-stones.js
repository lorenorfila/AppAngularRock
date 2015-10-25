'use strict';

/**
 * @ngdoc function
 * @name appMusicaApp.controller:TheRollingStonesCtrl
 * @description
 * # TheRollingStonesCtrl
 * Controller of the appMusicaApp
 */
angular.module('appMusicaApp')
  .controller('TheRollingStonesCtrl', function ($scope) {
   
  // video id
  $scope.theBestVideo = 'Nqp2stVMVjM';
	
  //var baseURL='./';
  $scope.setInterval=5000;

  $scope.slides = [
  	{
  		title:'The Rolling Stones',
  		image:'images/1.jpg',
  		text:'Grupo de rock británico integrado por Mick Jagger (Dartford, Reino Unido, 1943), Brian Jones (Cheltenham, Reino Unido, 1944 - Londres, 1969), Keith Richards (Dartford, Reino Unido, 1943), Bill Wyman (Londres, 1941) y Charlie Watts (Londres, 1941).'
  	},
  	
  	{
  		title:'The Rolling Stones',
  		image:'images/2.jpg',
  		text:'Son considerados una de las más grandes e influyentes agrupaciones de la historia del rock,4 siendo la agrupación que sentó las bases del rock contemporáneo.5 6 7 Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos'
  	},
  	
  	{
  		title:'The Rolling Stones',
  		image:'images/3.jpg',
  		text:'Sus primeras producciones incluían versiones y temas de blues, rock and roll y R&B norteamericano. No obstante, en el transcurso de su trayectoria añadieron toques estilísticos de otros géneros para adaptarse a cada época, recibiendo influencias desde la música psicodélica, el country, el punk, la música disco, el reggae o la música electrónica'
  	}
  ];
  });
