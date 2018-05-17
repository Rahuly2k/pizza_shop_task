/** 
 * New module and its controller to handle functionality of shoping.
*/

// create module

'use strict';

var shopModule = angular.module('shopModule',[]);

// create controller

shopModule.controller('shopController',['$scope','PizzaService',function($scope,PizzaService){

    // initialise all required objects and array

    $scope.selected_order = {ordered_pizza:[]};

    $scope.carry_selected_id = [];

    $scope.total = 0;

     // call pizza list service
   
     PizzaService.getPizzaList({}).then(function(res){

        // get api response data 

        $scope.pizza_list = res.data;

    },function(res){

        // handle error in service

        alert('Problem to get list.Please check internet connection');
    })

    // order function 

    $scope.add_to_order = function(data,ind){

        // check if order already selected or not.
        // if not then push order object to ordered_pizza array

        if($scope.carry_selected_id.indexOf(data.id)==-1){

            $scope.carry_selected_id.push(data.id);

            $scope.order_object = {};
            
            $scope.order_object.pizza_name = data.pizza_name;

            $scope.order_object.id = data.id;

            $scope.order_object.price = data.price;

            $scope.total += parseFloat(data.price);

            $scope.selected_order.total = $scope.total;

            $scope.selected_order.ordered_pizza.push($scope.order_object);
        }
        else{

            // if order already exist then remove it from list

            var delete_ind = $scope.carry_selected_id.indexOf(data.id);

            $scope.total -= parseFloat(data.price);

            $scope.selected_order.total = $scope.total;

            $scope.carry_selected_id.splice(delete_ind,1);

            $scope.selected_order.ordered_pizza.splice(delete_ind,1);
        }
    }

    // place order 

    $scope.place_order = function(){

        if($scope.selected_order.ordered_pizza.length==0){

            alert("Please select your order first");

            return false;
        }

    // call service to place order       

        PizzaService.savePizzaOrder({order:$scope.selected_order}).then(function(res){

            // show popup and display success message

            $('#myModal').modal('show');

            $scope.success_message = res.data.message;

            // reset all array and checkbox

            $('input:checkbox').prop( "checked", false );

            $scope.selected_order = {ordered_pizza:[]};

            $scope.carry_selected_id = [];
        
            $scope.total = 0;

        },function(res){

            // show modal with error message

            $('#myModal').modal('show');

            $scope.success_message = res.data.message;
        })
    }
}]);
