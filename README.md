# Pizza Shop Task

Its a Simple wed app for pizza shop where you can see list of items with its price and ingredients.When you select any item it will add to the order summary and then you can place your order.Your order details will be store in "server/order.json" file with total amount.

## Getting Started

Follow the simple steps to start the ptoject localy.

### Setup and instruction

* Download project.
* Extract the project and copy project folder to htdocs.
* Open terminal in project folder.
* Enter command "npm install".
* Enter command "cd ./server" 
* Start node server, enter command "node server".Node server will start at 8000 port.  
* start xampp.
* Open google chrome and enter url "http://localhost/pizza_shop_task-master"

## Description

App starts with home page where you can see "Order Now" button at center of screen. Just click the button and enter the order page. In order page you will see some pizza items with name, price, add to order checkbox and see ingredients. To check the pizza ingredients you just hover the "see ingredients" text and it will appear below it. Now, to buy any item you can select any of them and it will add to order summary and total amount of your order will also display some amount. After this you can place your order by clicking place order button.Once the order is placed, popup appears and show order successful message and the order details will be store in server/order.json file.
