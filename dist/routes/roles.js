"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _role = require("../controllers/role.controller");

var router = (0, _express.Router)();
router.post('/', _role.createRole);
router.get('/', _role.getRoles);
router.get('/:id', _role.getRole);
router["delete"]('/:id', _role.deletRole);
router.put('/:id', _role.updateRole);
var _default = router;
exports["default"] = _default;