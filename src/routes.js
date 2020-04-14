import { Router } from 'express';
import covid19ImpactEstimator from './estimator';

const router = new Router();

router.post('/', (req, res) => {
  try {
    const data = req.body;
    res.header('Content-Type', 'application/json');
    const processedData = covid19ImpactEstimator(data);
    return res.send(processedData);
  } catch (err) {
    return res.err({ status: 'error', message: err.message });
  }
});
