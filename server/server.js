var express = require('express');
var path = require('path');

// Initialize the Express App
var app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/products', function (req, res) {
  res.json({products: [{name: "Dog", description: "A dog."}, {name: "Deluxe Dog", description: "A better dog."}]});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
