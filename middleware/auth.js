// 61 - imprtamos jwt
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // 62 - Leemos el token
  const token = req.header("x-auth-token");

  // 63 - Verificar si hay un Token
  if (!token) {
    return res.status(401).json({ msg: "Permiso denegado, no hay un token..." });
  }

  // 64 - Validar el token
  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no válido..." });
  }
};
