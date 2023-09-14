const { Product } = require("../models");
const { Op } = require("sequelize");

class ProductController {
  static async products(req, res, next) {
    const { page = 0, search = "" } = req.query;
    let size = 6;
    let currentPage = size * page;
    let option = {
      limit: size,
      offset: currentPage,
      where: { name: { [Op.iLike]: `%${search}%` } },
    };
    try {
      let products = await Product.findAndCountAll(option);
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async productDetail(req, res, next) {
    const { id } = req.params;
    try {
      let products = await Product.findByPk(id);

      if (!products) throw { name: "notFound" };

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async productAdd(req, res, next) {
    try {
      const {
        CategoryId = Math.floor(Math.random() * 10) + 1,
        categoryName,
        name,
        sku,
        weight,
        width,
        length,
        description,
        height,
        image,
        harga,
      } = req.body;

      await Product.create({
        CategoryId,
        categoryName,
        sku,
        name,
        weight,
        width,
        description,
        length,
        height,
        image,
        harga,
      });
      res.status(201).json({ message: "berhasil create Product" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = ProductController;
