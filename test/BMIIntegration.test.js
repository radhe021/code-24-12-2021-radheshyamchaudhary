const request = require("supertest");
const app = require("../app");

const reqPayload = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82} ];

const respResult = [
  {
    "Gender": "Male",
    "HeightCm": 171,
    "WeightKg": 96,
    "BMI": "32.8",
    "BMICategory": "Moderately obese",
    "HealthRisk": "Medium risk"
  },
  {
    "Gender": "Male",
    "HeightCm": 161,
    "WeightKg": 85,
    "BMI": "32.8",
    "BMICategory": "Moderately obese",
    "HealthRisk": "Medium risk"
  },
  {
    "Gender": "Male",
    "HeightCm": 180,
    "WeightKg": 77,
    "BMI": "23.8",
    "BMICategory": "Normal weight",
    "HealthRisk": "Low risk"
  },
  {
    "Gender": "Female",
    "HeightCm": 166,
    "WeightKg": 62,
    "BMI": "22.5",
    "BMICategory": "Normal weight",
    "HealthRisk": "Low risk"
  },
  {
    "Gender": "Female",
    "HeightCm": 150,
    "WeightKg": 70,
    "BMI": "31.1",
    "BMICategory": "Moderately obese",
    "HealthRisk": "Medium risk"
  },
  {
    "Gender": "Female",
    "HeightCm": 167,
    "WeightKg": 82,
    "BMI": "29.4",
    "BMICategory": "Overweight",
    "HealthRisk": "Enhanced risk"
  }
]
const overweightResult = {
  "numberOfOverWeight": 1
}

describe("GET / ", () => {
  test("It should respond with an array of BMI result data", async () => {
    const response = await request(app).get("/").send(reqPayload);

    expect(response.body).toEqual(respResult);
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /overweight ", () => {
  test("It should respond with an single value of Over-weight result data", async () => {
    const response = await request(app).get("/overweight").send(reqPayload);
    expect(response.body).toEqual(overweightResult);
    expect(response.statusCode).toBe(200);
  });
});