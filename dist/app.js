"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _users = _interopRequireDefault(require("./routes/users"));

var _roles = _interopRequireDefault(require("./routes/roles"));

var _course = _interopRequireDefault(require("./routes/course"));

var _category = _interopRequireDefault(require("./routes/category"));

var _goal = _interopRequireDefault(require("./routes/goal"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config(); // importing routes


var app = (0, _express["default"])();
//middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); // entender los archivos json que le llegue al servidor
// routes

app.use('/api/auth', _auth["default"]);
app.use('/api/roles', _roles["default"]);
app.use('/api/users', _users["default"]);
app.use('/api/courses', _course["default"]);
app.use('/api/categories', _category["default"]);
app.use('/api/goals', _goal["default"]);
var _default = app;
exports["default"] = _default;