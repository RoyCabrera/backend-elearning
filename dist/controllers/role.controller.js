"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.deletRole = exports.getRole = exports.getRoles = exports.createRole = void 0;

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, description, newRole;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            _context.prev = 1;
            _context.next = 4;
            return _Role["default"].create({
              name: name,
              description: description
            }, {
              fields: ['name', 'description']
            });

          case 4:
            newRole = _context.sent;

            if (newRole) {
              res.json({
                message: "Rol creado satisfactoriamente",
                data: newRole
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("aaaaaaaa", _context.t0);
            res.status(500).json({
              message: "Algo sucedió mal"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var getRoles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var roles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Role["default"].findAll();

          case 2:
            roles = _context2.sent;
            res.json({
              data: roles
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRoles = getRoles;

var getRole = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, role;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Role["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            role = _context3.sent;
            res.json(role);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRole = getRole;

var deletRole = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Role["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Rol eliminado correctamente",
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletRole = deletRole;

var updateRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, description, roles;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description;
            _context6.next = 4;
            return _Role["default"].findAll({
              attributes: ['id', 'name', 'description'],
              where: {
                id: id
              }
            });

          case 4:
            roles = _context6.sent;

            if (roles.length > 0) {
              roles.forEach( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(role) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return role.update({
                            name: name,
                            description: description
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());
            }

            res.json({
              message: "Proyecto actualizado correctamente",
              data: roles
            });

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateRole = updateRole;