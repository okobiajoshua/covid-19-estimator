import { Router } from 'express';
import jtx from 'jtx';
import fs from 'fs';
import covid19ImpactEstimator from './estimator';

const router = new Router();

router.get('/logs', (req, res) => {
  try {
    res.header('Content-Type', 'plain/text');
    fs.readFile('log.txt', (err, buf) => {
      if (err) {
        throw err;
      }
      return res.send(buf);
    });
  } catch (err) {
    return res.err({ status: 'error', message: err.message });
  }
});

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
