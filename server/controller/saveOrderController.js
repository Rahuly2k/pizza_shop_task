// import package to write json file

var jsonFile = require('jsonfile');

module.exports.saveOrderFunction = function(req,res){

    // file url to write order data

    var file = "../server/order.json"; 
   
    jsonFile.writeFile(file, req.body, {flag: 'a'}, function (err) {
        
        if(err){

            res.status(500).json({status:500,message:"Sorry we Can't process your order "});
        }
        else{
            res.json({"message":"Your order will be delivered in 30 minutes"});
        }

      })
}