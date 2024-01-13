
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean?:nums', function(req, res) {
    return res.json(
        { nums: req.params.nums,
          mean:  
     });

});

app.get('/median?:nums', function(re, res) {

});

app.get('/mode?;nums', function(re, res) {

});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
