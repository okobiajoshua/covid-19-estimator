"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressXmlBodyparser = _interopRequireDefault(require("express-xml-bodyparser"));

var _routes = _interopRequireDefault(require("./routes"));

var _middlewares = _interopRequireDefault(require("./middlewares"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _expressXmlBodyparser.default)());
app.use(_bodyParser.default.json());
app.use(_middlewares.default);
app.use('/api/v1/on-covid-19', _routes.default);
module.exports = app;