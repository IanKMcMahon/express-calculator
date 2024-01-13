
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean?:nums', function(req, res) {
let mean = Math().mean([nums])
return mean
     });



app.get('/median?:nums', function(re, res) {
  let median = Math().median([nums])
  return mean
});

app.get('/mode?;nums', function(re, res) {
  let mode = Math().mode([nums])
  return mean
});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
