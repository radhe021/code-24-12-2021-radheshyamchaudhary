Request JSON : [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82},
 {"Gender": "Female",
"HeightCm": 148, "WeightKg": 82}
]
From Postman or any Rest Client
1) To calculate BMI , BMICategory , HealthRisk : hit localhost:3000/ with Request JSON
2) TO find number of over weight profiles : hit localhost:3000/overweight with Request JSON

Unit and integraton test cases has been written using Jest and Supertest.
All unit tests cases for Request JSON has been added in unit test file and integration test 
with Request JSON for both end-points has been added.

Code Lint:
Linting via ESLint