/*
** Using ngRoute creates routing here 
*/

'use strict';

angular.module('pizzaApp',['ngRoute','homeModule','shopModule','commonModule']).config(['$routeProvider',function($routeProvider){

    // ...........home............//

    $routeProvider.when('/', {templateUrl: 'modules/home/view/home.html',controller:'homeController'});

    // ...........shop............//

    $routeProvider.when('/shop', {templateUrl: 'modules/order_pizza/view/shop.html',controller:'shopController'});    

    // ...........otherwise............//

    $routeProvider.otherwise({redirectTo: '/'});
}]);