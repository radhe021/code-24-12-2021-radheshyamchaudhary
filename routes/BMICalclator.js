var express = require('express');
var router = express.Router();
const BMICalculator = require('../service/BMICalculatorService');

/* GET BMI calculation */

router.get('/', async (req, res, next) => {
    let rsp  = req.body.map((item)=> BMICalculator(item));
    res.status(200).send(rsp)
});
module.exports = router ;

