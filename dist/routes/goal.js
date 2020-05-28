"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _goal = require("../controllers/goal.controller");

var router = (0, _express.Router)();
router.get('/:id', _goal.getGoals);
var _default = router;
exports["default"] = _default;