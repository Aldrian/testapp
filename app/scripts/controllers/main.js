'use strict';

/**
 * @ngdoc function
 * @name testcafetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testcafetApp
 */
angular.module('testcafetApp')
  .controller('MainCtrl', function ($scope, $window) {


  	$scope.loadElements = function(index) {
  		$scope.state = index;  		
		$scope.tiles = items[index].elements;
  	};

  	$scope.back = function() {
  		$scope.state = 'parent';  		
		$scope.tiles = items;
  	};

  	$scope.order = function(index) {
  		$window.alert('Commande de l\'objet ' + items[$scope.state].elements[index].name);	
  	};

    var items = [
    {
    	'name' : 'Café',
    	'icon' : 'images/coffee.png',
    	'elements' : [
	    	{
	    		'name' : 'Ristretto',
    			'icon' : 'images/coffee.png'
	    	},
	    	{
	    		'name' : 'India',
    			'icon' : 'images/coffee.png'
	    	},
	    	{
	    		'name' : 'Intenso',
    			'icon' : 'images/coffee.png'
	    	},
	    	{
	    		'name' : 'Lungo forte',
    			'icon' : 'images/coffee.png'
	    	}
    	]
    },
    {
    	'name' : 'Thé',
    	'icon' : 'images/tea.png',
    	'elements' : [
	    	{
	    		'name' : 'Thé citron',
    			'icon' : 'images/tea.png'
	    	},
	    	{
	    		'name' : 'Thé vert',
    			'icon' : 'images/tea.png'
	    	},
	    	{
	    		'name' : 'Thé forest fruit',
    			'icon' : 'images/tea.png'
	    	}
    	]
    },
     {
    	'name' : 'Canettes',
    	'icon' : 'images/can.png',
    	'elements' : [
	    	{
	    		'name' : 'Ice tea',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Coca cola',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Coca light',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Coca zero',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Coca cherry',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Orangina',
    			'icon' : 'images/can.png'
	    	},
	    	{
	    		'name' : 'Red bull',
    			'icon' : 'images/can.png'
	    	}
    	]
    },
    {
    	'name' : 'Cookie',
    	'icon' : 'images/cookie.png',
    	'elements' : [
	    	{
	    		'name' : 'Chocolat',
    			'icon' : 'images/cookie.png'
	    	},
	    	{
	    		'name' : 'Cacahuètes',
    			'icon' : 'images/cookie.png'
	    	},
	    	{
	    		'name' : 'Noix',
    			'icon' : 'images/cookie.png'
	    	},
	    	{
	    		'name' : 'Vanille',
    			'icon' : 'images/cookie.png'
	    	}
    	]
    },
    {
    	'name' : 'Chocolat chaud',
    	'icon' : 'images/chocolate.png',
    	'elements' : [
	    	{
	    		'name' : 'Chocolat chaud',
    			'icon' : 'images/chocolate.png'
	    	}
    	]
    },
    {
    	'name' : 'Snacks',
    	'icon' : 'images/snack.png',
    	'elements' : [
	    	{
	    		'name' : 'Kit kat',
    			'icon' : 'images/snack.png'
	    	},
	    	{
	    		'name' : 'Kinder Bueno',
    			'icon' : 'images/snack.png'
	    	},
	    	{
	    		'name' : 'Snickers',
    			'icon' : 'images/snack.png'
	    	},
	    	{
	    		'name' : 'Mars',
    			'icon' : 'images/snack.png'
	    	},
	    	{
	    		'name' : 'Lion',
    			'icon' : 'images/snack.png'
	    	}
    	]
    },
     {
    	'name' : 'Patisseries',
    	'icon' : 'images/pastry.png',
    	'elements' : [
	    	{
	    		'name' : 'Chocolatine',
    			'icon' : 'images/pastry.png'
	    	},
	    	{
	    		'name' : 'Croissant',
    			'icon' : 'images/pastry.png'
	    	},
	    	{
	    		'name' : 'Pain suisse',
    			'icon' : 'images/pastry.png'
	    	}
    	]
    }   

    ];

    $scope.colors= ['red','indigo','green','purple',
    'amber','pink','lime','teal','cyan','brown'];

    $scope.tiles = items;

    $scope.state = 'parent';

  });
