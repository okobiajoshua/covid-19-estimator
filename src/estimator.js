const requestedTimeInDays = (periodType, timeToElapse) => {
  switch (periodType.toLowerCase()) {
    case 'days': return timeToElapse;
    case 'weeks': return 7 * timeToElapse;
    case 'months': return 30 * timeToElapse;
    default: return 0;
  }
};

const calculateImpact = (data, multiplier) => {
  const {
    reportedCases, periodType, timeToElapse
  } = data;
  const currentlyInfectedPeople = Math.floor(reportedCases) * multiplier;
  const requestedDays = requestedTimeInDays(periodType, timeToElapse);
  const factor = Math.floor(requestedDays / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfectedPeople * (2 ** factor), 10);

  return {
    currentlyInfectedPeople,
    infectionsByRequestedTime
  };
};


const covid19ImpactEstimator = (data) => {
  const impact = calculateImpact(data, 10);
  const severeImpact = calculateImpact(data, 50);
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
