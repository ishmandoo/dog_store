var express = require('express');
var app = express();
import mongoose from 'mongoose';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('./client'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
