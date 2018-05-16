/**
 *  create all api route here
 */

// import controllers

var saveOrderController = require('./controller/saveOrderController');

// route function

module.exports = function(app,express){

    var  api = express.Router();

    api.post('/saveorder',saveOrderController.saveOrderFunction);

    return api;
}