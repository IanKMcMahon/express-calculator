
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }


  let result = {
    operation: "mean",
    result: findMean(nums)
  }

  return res.send(result);
});


app.get('/median?:nums', function(req, res) {
  let median = Math().median([nums])
  return mean
});

app.get('/mode?;nums', function(req, res) {
  let mode = Math().mode([nums])
  return mean
});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
