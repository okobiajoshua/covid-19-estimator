import covid19ImpactEstimator from './estimator';

test('returns right values for currentlyInfectedPeople and infectionsByRequestedTime', () => {
  const data = {
    periodType: 'days',
    timeToElapse: 3,
    reportedCases: 10
  };
  const result = {
    data,
    impact: {
      currentlyInfectedPeople: 100,
      infectionsByRequestedTime: 200
    },
    severeImpact: {
      currentlyInfectedPeople: 500,
      infectionsByRequestedTime: 1000
    }
  };

  expect(covid19ImpactEstimator(data)).toEqual(result);
});
