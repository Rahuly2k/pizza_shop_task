/**
 *  create all services related to pizza order 
 */
'use strict';

shopModule.factory('PizzaService',function($http){

    //  header content

    var headers_content = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'};

    return {

            //---- get pizza list ----//
    
            getPizzaList: function(params){

                return $http.get('server/pizzas.json',{params:params,headers:headers_content})            
            },

            //---- save pizza order ----//

            savePizzaOrder: function(params){

                return $http.post('http://localhost:8000/api/saveorder',$.param(params),{headers:headers_content})            
            }
    }

});