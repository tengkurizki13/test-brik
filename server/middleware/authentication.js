const { decodedJson } = require("../helpers/webToken");
const { Author, User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    if (!req.headers.access_token) throw { name: "authentication" };
    let decoded = decodedJson(req.headers.access_token);
    let author = await Author.findByPk(decoded.id);
    if (!author) throw { name: "authentication" };

    req.author = {
      id: author.id,
      role: author.role,
      email: author.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
