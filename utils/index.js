const { createJWT, isTokenValid, attachCookiesToResponse } = require("./jwt");
const createToken = require("./createTokenUser");
const checkPermissions = require("./checkPermissions");

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createToken,
  checkPermissions,
};
