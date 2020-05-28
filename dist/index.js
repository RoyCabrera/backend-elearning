"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import express from 'express'; */
// importing routes

/* const app = express(); */
var main = function main() {
  _app["default"].listen(4546);
};

main();