"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.SERVER_PORT || 3000;

_app.default.listen(port, () => {
  console.log(`Listening on port ${port}`);
});