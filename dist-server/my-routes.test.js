"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Estimate values in days', () => {
  const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.5
    },
    periodType: 'days',
    timeToElapse: 3,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const jsonResponse = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 20,
      severeCasesByRequestedTime: 3,
      hospitalBedsByRequestedTime: 32,
      casesForICUByRequestedTime: 1,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 16
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 100,
      severeCasesByRequestedTime: 15,
      hospitalBedsByRequestedTime: 20,
      casesForICUByRequestedTime: 5,
      casesForVentilatorsByRequestedTime: 2,
      dollarsInFlight: 83
    }
  };
  test('Appropriate response needed for /api/v1/on-covid-19 in days', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
  test('Appropriate response needed for /api/v1/on-covid-19/json in days', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19/json').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
});
describe('estimate values in weeks', () => {
  const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.5
    },
    periodType: 'weeks',
    timeToElapse: 1,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const jsonResponse = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 40,
      severeCasesByRequestedTime: 6,
      hospitalBedsByRequestedTime: 29,
      casesForICUByRequestedTime: 2,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 14
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 200,
      severeCasesByRequestedTime: 30,
      hospitalBedsByRequestedTime: 5,
      casesForICUByRequestedTime: 10,
      casesForVentilatorsByRequestedTime: 4,
      dollarsInFlight: 71
    }
  };
  test('Appropriate response needed for /api/v1/on-covid-19 in weeks', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
  test('Appropriate response needed for /api/v1/on-covid-19/json in weeks', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19/json').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
});
describe('estimate values in months', () => {
  const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.5
    },
    periodType: 'months',
    timeToElapse: 1,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const jsonResponse = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 10240,
      severeCasesByRequestedTime: 1536,
      hospitalBedsByRequestedTime: -1501,
      casesForICUByRequestedTime: 512,
      casesForVentilatorsByRequestedTime: 204,
      dollarsInFlight: 853
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 51200,
      severeCasesByRequestedTime: 7680,
      hospitalBedsByRequestedTime: -7645,
      casesForICUByRequestedTime: 2560,
      casesForVentilatorsByRequestedTime: 1024,
      dollarsInFlight: 4266
    }
  };
  test('Appropriate response needed for /api/v1/on-covid-19 in months', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
  test('Appropriate response needed for days /api/v1/on-covid-19/json in months', () => (0, _supertest.default)(_app.default).post('/api/v1/on-covid-19/json').send(data).then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(jsonResponse);
  }));
});