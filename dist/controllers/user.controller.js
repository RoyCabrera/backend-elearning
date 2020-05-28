"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.getUsers = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

var _Student = _interopRequireDefault(require("../models/Student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findAll();

          case 2:
            users = _context.sent;
            res.json({
              data: users
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var createUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, last_name, email, password, salt, user, newUser, newStudent, payload;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, last_name = _req$body.last_name, email = _req$body.email, password = _req$body.password;
            _context2.next = 3;
            return _bcryptjs["default"].genSalt(10);

          case 3:
            salt = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return _User["default"].findOne({
              where: {
                email: email
              }
            });

          case 7:
            user = _context2.sent;

            if (!user) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "El usuario ya existe"
            }));

          case 10:
            _context2.t0 = _User["default"];
            _context2.t1 = name;
            _context2.t2 = last_name;
            _context2.t3 = email;
            _context2.next = 16;
            return _bcryptjs["default"].hash(password, salt);

          case 16:
            _context2.t4 = _context2.sent;
            _context2.t5 = {
              name: _context2.t1,
              last_name: _context2.t2,
              email: _context2.t3,
              password: _context2.t4
            };
            _context2.t6 = {
              fields: ["name", "last_name", "email", "password"]
            };
            _context2.next = 21;
            return _context2.t0.create.call(_context2.t0, _context2.t5, _context2.t6);

          case 21:
            newUser = _context2.sent;

            if (!newUser) {
              _context2.next = 26;
              break;
            }

            _context2.next = 25;
            return _Student["default"].create({
              userId: newUser.id
            }, {
              fields: ["userId"]
            });

          case 25:
            newStudent = _context2.sent;

          case 26:
            payload = {
              usuario: {
                id: newUser.id
              }
            };

            _jsonwebtoken["default"].sign(payload, process.env.JWT_PALABRASECRETA, {
              expiresIn: 3600
            }, function (error, token) {
              if (error) throw error; // mensaje de confirmacion

              if (newUser) {
                res.json({
                  message: "Usuario creado satisfactoriamente",
                  data: newUser,
                  token: token
                });
              }
            });

            _context2.next = 34;
            break;

          case 30:
            _context2.prev = 30;
            _context2.t7 = _context2["catch"](4);
            console.log("Mensaje de error: ", _context2.t7);
            res.status(500).json({
              message: "Algo sucedió mal"
            });

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 30]]);
  }));

  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUser = createUser;