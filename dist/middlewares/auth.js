"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = function auth(req, res, next) {
  // Leer el token del header
  var token = req.header('x-auth-token'); // Revisar si no hay token

  if (!token) {
    return res.status(401).json({
      msg: 'No hay Token, permiso no válido'
    });
  } // validar el token


  try {
    var cifrado = _jsonwebtoken["default"].verify(token, process.env.JWT_PALABRASECRETA);

    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(401).json({
      msg: 'Token no válido'
    });
  }
};

var _default = auth;
exports["default"] = _default;