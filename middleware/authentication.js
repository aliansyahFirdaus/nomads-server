const { readToken } = require("../helpers");
const { User } = require("../models");

class Authentication {
  static async user(req, res, next) {
    try {
      const { access_token } = req.headers;

      console.log(access_token);

      const payload = readToken(access_token);

      const findUser = await User.findByPk(payload.id);

      if (!findUser) {
        throw { name: "UNAUTHORIZED" };
      } else {
        req.user = {
          userId: findUser.id,
        };
      }
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Authentication;
