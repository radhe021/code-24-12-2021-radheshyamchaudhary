// define constants
'use strict';
let constants = {
    HeightConversionFactor :100,
    UnderWeight :{
      LowerLimit: undefined,
      UpperLimit:18.4,
      BMICategory:'Underweight',
      HealthRisk:'Malnutrition risk'
    },
    NormalWeight:{
      LowerLimit:18.5,
      UpperLimit:24.9,
      BMICategory:'Normal weight',
      HealthRisk:'Low risk'
    },
    OverWeight:{
      LowerLimit:25,
      UpperLimit:29.9,
      BMICategory:'Overweight',
      HealthRisk:'Enhanced risk'
    },
    ModeratelyObese:{
      LowerLimit:30,
      UpperLimit:34.9,
      BMICategory:'Moderately obese',
      HealthRisk:'Medium risk'
    },
    SeverelyObese:{
      LowerLimit:35,
      UpperLimit:39.9,
      BMICategory:'Severely obese',
      HealthRisk:'High risk'
    },
    VerySeverelyObese:{
      LowerLimit:40,
      UpperLimit:undefined,
      BMICategory:'Very severely obese',
      HealthRisk:'Very high risk'
    }
}
module.exports = Object.freeze(constants); 