"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logRequestDetails = (req, res, next) => {
  const startTime = new Date();
  const reqMethod = req.method;
  const reqUrl = req.originalUrl;
  res.on('finish', () => {
    const resCode = res.statusCode;
    const endTime = new Date();
    const timeSpent = endTime - startTime;
    const data = `${reqMethod}\t\t${reqUrl}\t\t${resCode}\t\t${timeSpent} ms\n`;

    _fs.default.appendFile('log.txt', data, err => err);
  });
  next();
};

var _default = logRequestDetails;
exports.default = _default;