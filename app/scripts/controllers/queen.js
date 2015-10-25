'use strict';

/**
 * @ngdoc function
 * @name appMusicaApp.controller:QueenCtrl
 * @description
 * # QueenCtrl
 * Controller of the appMusicaApp
 */
angular.module('appMusicaApp')
  .controller('QueenCtrl', function ($scope) {
   $scope.vQueen = 'eM8Ss28zjcE';
	
  var baseURL='http://eggythebread.weebly.com/uploads/2/4/4/7/24471195/5236678_orig.jpg';
  

  $scope.contenido = [
  	{
  		title:'Queen',
  		image:baseURL,
  		text:'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.4'
  	}
  ];
  });
