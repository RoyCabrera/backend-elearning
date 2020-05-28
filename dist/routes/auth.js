"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _auth2 = require("../controllers/auth.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _auth2.userAuthentication);
router.get('/', _auth["default"], _auth2.userAuthenticated);
var _default = router;
exports["default"] = _default;