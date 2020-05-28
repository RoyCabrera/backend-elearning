"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCourse = exports.getCourses = void 0;

var _Course = _interopRequireDefault(require("../models/Course"));

var _Teacher = _interopRequireDefault(require("../models/Teacher"));

var _Level = _interopRequireDefault(require("../models/Level"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _Status = _interopRequireDefault(require("../models/Status"));

var _User = _interopRequireDefault(require("../models/User"));

var _Goal = _interopRequireDefault(require("../models/Goal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCourses = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var courses;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Course["default"].findAll({
              include: [{
                model: _Teacher["default"],
                include: _User["default"]
              }, {
                model: _Level["default"]
              }, {
                model: _Category["default"]
              }]
            });

          case 2:
            courses = _context.sent;
            res.json({
              data: courses
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCourses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCourses = getCourses;

var getCourse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, course;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Course["default"].findOne({
              include: [{
                model: _Teacher["default"],
                include: _User["default"]
              }, {
                model: _Level["default"]
              }, {
                model: _Category["default"]
              }],
              where: {
                id: id
              }
            });

          case 4:
            course = _context2.sent;
            res.json({
              course: course
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getCourse(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCourse = getCourse;