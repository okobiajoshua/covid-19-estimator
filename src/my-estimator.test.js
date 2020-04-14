import covid19ImpactEstimator from './estimator';

test('estimate current and projected infections in days', () => {
  const data = {
    periodType: 'days',
    timeToElapse: 3,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 20,
      severeCasesByRequestedTime: 3,
      hospitalBedsByRequestedTime: 32
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 100,
      severeCasesByRequestedTime: 15,
      hospitalBedsByRequestedTime: 20
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});

test('estimate current and projected infections in weeks', () => {
  const data = {
    periodType: 'weeks',
    timeToElapse: 1,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 40,
      severeCasesByRequestedTime: 6,
      hospitalBedsByRequestedTime: 29
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 200,
      severeCasesByRequestedTime: 30,
      hospitalBedsByRequestedTime: 5
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});


test('estimate current and projected infections in months', () => {
  const data = {
    periodType: 'months',
    timeToElapse: 1,
    reportedCases: 1,
    totalHospitalBeds: 100
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 10240,
      severeCasesByRequestedTime: 1536,
      hospitalBedsByRequestedTime: -1501
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 51200,
      severeCasesByRequestedTime: 7680,
      hospitalBedsByRequestedTime: -7645
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});
