var express = require('express');
var router = express.Router();
const BMICalculator = require('../service/BMICalculatorService');

/* GET Over-Weight count. */
router.get('/', async (req, res, next) => {
  let rsp  = req.body.map((item)=> BMICalculator(item));
  const overWeightCount = rsp.filter((item)=> item.BMICategory =='Overweight').length;
     res.status(200).send({numberOfOverWeight:overWeightCount});
});

module.exports = router;
