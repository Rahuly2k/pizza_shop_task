/**
 * create home module 
 */

'use strict';

var homeModule = angular.module('homeModule',[]);

// create home controller 

homeModule.controller('homeController',['$scope','$location',function($scope,$location){

    // enter shop function

    $scope.enter_shop = function(){

        $location.path('/shop');
    }
}]);