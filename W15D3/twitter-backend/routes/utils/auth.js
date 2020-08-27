const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

const db = require('../../db/models');

const { User } = db;

exports.getUserToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    secret,
    { expiresIn: parseInt(expiresIn) } // expressed in seconds
  );
};

exports.getUserFromToken = async (token) => {
  try {
    const payload = jwt.verify(
      token,
      secret
    );
    return await User.findByPk(payload.id);
  } catch(err) {
    return null;
  }
}

exports.requireUser = (req, res, next) => {
  if (req.user) return next();
  const err = Error("Unauthorized");
  err.status = 401;
  err.title = "Unauthorized";
  next(err);
}