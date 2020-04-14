"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _jtx = _interopRequireDefault(require("jtx"));

var _fs = _interopRequireDefault(require("fs"));

var _estimator = _interopRequireDefault(require("./estimator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.Router();
router.get('/logs', (req, res) => {
  try {
    res.header('Content-Type', 'plain/text');
    let response;

    _fs.default.readFileSync('log.txt', (err, buf) => {
      if (err) {
        throw err;
      }

      response = buf;
    });

    return res.send(response);
  } catch (err) {
    return res.err({
      status: 'error',
      message: err.message
    });
  }
});
router.post('/', (req, res) => {
  try {
    const data = req.body;
    res.header('Content-Type', 'application/json');
    const processedData = (0, _estimator.default)(data);
    return res.send(processedData);
  } catch (err) {
    return res.err({
      status: 'error',
      message: err.message
    });
  }
});
router.post('/:response_type', (req, res) => {
  try {
    const data = req.body;
    const processedData = (0, _estimator.default)(data);

    if (req.params.response_type === 'xml') {
      res.header('Content-Type', 'application/xml');
      return res.send((0, _jtx.default)(processedData));
    }

    res.header('Content-Type', 'application/json');
    return res.json(processedData);
  } catch (err) {
    return res.err({
      status: 'error',
      message: err.message
    });
  }
});
var _default = router;
exports.default = _default;