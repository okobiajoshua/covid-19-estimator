import covid19ImpactEstimator from './estimator';

test('estimate current and projected infections in days', () => {
  const data = {
    periodType: 'days',
    timeToElapse: 3,
    reportedCases: 1
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 20
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 100
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});

test('estimate current and projected infections in weeks', () => {
  const data = {
    periodType: 'weeks',
    timeToElapse: 1,
    reportedCases: 1
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 40
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 200
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});


test('estimate current and projected infections in months', () => {
  const data = {
    periodType: 'months',
    timeToElapse: 1,
    reportedCases: 1
  };
  const result = {
    data,
    impact: {
      currentlyInfected: 10,
      infectionsByRequestedTime: 10240
    },
    severeImpact: {
      currentlyInfected: 50,
      infectionsByRequestedTime: 51200
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});
