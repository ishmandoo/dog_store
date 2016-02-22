var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogstore');

var Product = mongoose.model('Product', { name: String , description:String});

Product.count({}, function(err, count){
  if(count==0){
    var dog_product = new Product({name: "Dog", description: "A dog."});
    dog_product.save(function (err) {

      console.log('meow. Made a dog.');
    });
  }
});




// Initialize the Express App
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/products', function (req, res) {
  Product.find({}, function(err,products){
      res.json({products: products});
  })
});

app.post('/api/products', function(req, res){
  console.log(req.body)
    var new_product = Product(req.body);
    new_product.save(function (err) {
        console.log('meow. Made a dog.');
      });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
