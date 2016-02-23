var mongoose = require('mongoose');

var Product = mongoose.model('Product', { name: String , description:String});

module.exports = Product;
