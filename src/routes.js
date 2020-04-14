import { Router } from 'express';
import jtx from 'jtx';
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

router.post('/:response_type', (req, res) => {
  try {
    const data = req.body;
    const processedData = covid19ImpactEstimator(data);
    if (req.params.response_type === 'xml') {
      res.header('Content-Type', 'application/xml');
      return res.send(jtx(processedData));
    }
    res.header('Content-Type', 'application/json');
    return res.json(processedData);
  } catch (err) {
    return res.err({ status: 'error', message: err.message });
  }
});

export default router;
