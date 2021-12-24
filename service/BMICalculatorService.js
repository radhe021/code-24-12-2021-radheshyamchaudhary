var constants = require('../constants/constants')
'use strict';

// BMI calculation function

function BMICalculator(item)
{
   let BMIInfo = null;
   let BMINumber = (item.WeightKg / (item.HeightCm/constants.HeightConversionFactor)**2).toFixed(1); 
      switch (true) {
        case (BMINumber <= constants.UnderWeight.UpperLimit):
          BMIInfo = ({...item,BMI:BMINumber,
                         BMICategory:constants.UnderWeight.BMICategory,
                         HealthRisk:constants.UnderWeight.HealthRisk
              })
            break;
        case (  BMINumber >=constants.NormalWeight.LowerLimit  && BMINumber<= constants.NormalWeight.UpperLimit):
          BMIInfo = ({...item,BMI:BMINumber,
                  BMICategory:constants.NormalWeight.BMICategory,
                  HealthRisk:constants.NormalWeight.HealthRisk
              })
            break;
          case (  BMINumber >=constants.OverWeight.LowerLimit && BMINumber<=constants.OverWeight.UpperLimit):
            BMIInfo = ({...item,BMI:BMINumber,
                  BMICategory:constants.OverWeight.BMICategory,
                  HealthRisk:constants.OverWeight.HealthRisk
              })
            break;
            case (  BMINumber >= constants.ModeratelyObese.LowerLimit  && BMINumber<=constants.ModeratelyObese.UpperLimit):
              BMIInfo = ({...item,BMI:BMINumber,
                  BMICategory:constants.ModeratelyObese.BMICategory,
                  HealthRisk:constants.ModeratelyObese.HealthRisk
              })
            break;
          case (  BMINumber >=constants.SeverelyObese.LowerLimit && BMINumber<= constants.SeverelyObese.UpperLimit):
            BMIInfo = ({...item,BMI:BMINumber,
                  BMICategory:constants.SeverelyObese.BMICategory,
                  HealthRisk:constants.SeverelyObese.HealthRisk
              })
            break;
        case (BMINumber >= constants.VerySeverelyObese.LowerLimit):
          BMIInfo = ({...item,BMI:BMINumber,
                  BMICategory:constants.VerySeverelyObese.BMICategory,
                  HealthRisk:constants.VerySeverelyObese.HealthRisk
              })
            break;
        default:
          BMIInfo = ({...item,BMI:BMINumber})
            break;
          }
      return BMIInfo;
}
module.exports = Object.freeze(BMICalculator);