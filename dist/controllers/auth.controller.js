"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuthenticated = exports.userAuthentication = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _Student = _interopRequireDefault(require("../models/Student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userAuthentication = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, usuario, passwordCorrect, payload;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password; // validar que sea un usuario registrado

            _context.next = 3;
            return _User["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            usuario = _context.sent;

            if (usuario) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "El usuario no existe"
            }));

          case 6:
            _context.next = 8;
            return _bcryptjs["default"].compare(password, usuario.password);

          case 8:
            passwordCorrect = _context.sent;

            if (passwordCorrect) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "el password es incorrecto"
            }));

          case 11:
            payload = {
              usuario: {
                id: usuario.id
              }
            };

            _jsonwebtoken["default"].sign(payload, process.env.JWT_PALABRASECRETA, {
              expiresIn: 3600
            }, function (error, token) {
              if (error) throw error; // mensaje de confirmacion

              res.json({
                token: token
              });
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userAuthentication(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.userAuthentication = userAuthentication;

var userAuthenticated = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var usuario;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findOne({
              where: req.usuario.id,
              attributes: ['id', 'name', 'email', 'last_name', 'picture'],
              include: [_Role["default"], _Student["default"]]
            });

          case 3:
            usuario = _context2.sent;
            res.json({
              usuario: usuario
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Hubo un error"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function userAuthenticated(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userAuthenticated = userAuthenticated;