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
    region, reportedCases, periodType, timeToElapse, totalHospitalBeds
  } = data;
  const currentlyInfected = Math.floor(reportedCases) * multiplier;
  const requestedDays = requestedTimeInDays(periodType, timeToElapse);
  const factor = Math.floor(requestedDays / 3);
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);
  const severeCasesByRequestedTime = Math.floor(0.15 * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = parseInt(0.35 * totalHospitalBeds - severeCasesByRequestedTime, 10);
  const casesForICUByRequestedTime = Math.floor(0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.floor(0.02 * infectionsByRequestedTime);
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;
  const dollarsInFlight = Math.floor(
    (infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD) / requestedDays
  );
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
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
