const { User } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { encodedJson } = require("../helpers/webToken");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      await User.create({
        email,
        password,
      });
      res.status(201).json([
        {
          massage: "success to register",
        },
      ]);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Bad Request" };
      let user = await User.findOne({
        where: { email },
      });
      if (!user) throw { name: "authentication" };
      let isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "authentication" };
      let payload = {
        id: user.id,
      };
      payload = encodedJson(payload);
      res.status(200).json([
        {
          massage: "success to login",
          access_token: payload,
          id: user.id,
          role: user.role,
        },
      ]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
