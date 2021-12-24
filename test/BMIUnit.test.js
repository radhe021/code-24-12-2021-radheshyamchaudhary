const BMICalculator = require('../service/BMICalculatorService');

const reqPayload = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82} ];
const RequestLowRisk = { "Gender": "Female", "HeightCm": 166,"WeightKg": 62}
const ResponseLowRisk = {
  "Gender": "Female",
  "HeightCm": 166,
  "WeightKg": 62,
  "BMI": "22.5",
  "BMICategory": "Normal weight",
  "HealthRisk": "Low risk"
}
test('Low Risk case', () => {
  expect(BMICalculator(RequestLowRisk)).toEqual(ResponseLowRisk);
});
const RequestMediumRisk = {"Gender": "Male", "HeightCm": 171, "WeightKg": 96 };
const ResponseMediumRisk ={
  "Gender": "Male",
  "HeightCm": 171,
  "WeightKg": 96,
  "BMI": "32.8",
  "BMICategory": "Moderately obese",
  "HealthRisk": "Medium risk"
}
test('Medium Risk case', () => {

  expect(BMICalculator(RequestMediumRisk)).toEqual(ResponseMediumRisk);
});
const RequestEnhancedRisk = {"Gender": "Female","HeightCm": 167, "WeightKg": 82}
const ResponseEnhancedRisk ={
  "Gender": "Female",
  "HeightCm": 167,
  "WeightKg": 82,
  "BMI": "29.4",
  "BMICategory": "Overweight",
  "HealthRisk": "Enhanced risk"
}
test('Enhanced Risk case', () => {
  expect(BMICalculator(RequestEnhancedRisk)).toEqual(ResponseEnhancedRisk);
});

const responseOverWeight ={
  "overweightCount": 1
}
test('Single over-weight count', () => {
  let rsp  = reqPayload.map((item)=> BMICalculator(item));
  const overWeightCount = rsp.filter((item)=> item.BMICategory =='Overweight').length;
  expect(overWeightCount).toEqual(1);
});

test('Not null test', () => {
  expect(BMICalculator(RequestMediumRisk)).not.toBeNull();
});