const customError = require("../errors");

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") {
    return;
  }
  if (requestUser.userId === resourceUserId.toString()) {
    return;
  }
  throw new customError.UnauthorizedError("Not allowed to access this route");
};

module.exports = checkPermissions;
