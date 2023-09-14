const { Product } = require("../models");

class ProductController {
  static async products(req, res, next) {
    try {
      let products = await Product.findAll();
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
        CategoryId,
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
