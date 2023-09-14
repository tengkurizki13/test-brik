"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "CategoryId is Required" },
          notNull: { msg: "CategoryId is Required" },
        },
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Category Name is Required" },
          notNull: { msg: "Category Name is Required" },
        },
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "SKU is Required" },
          notNull: { msg: "SKU is Required" },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name is Required" },
          notNull: { msg: "Name is Required" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Description is Required" },
          notNull: { msg: "Description is Required" },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Weight is Required" },
          notNull: { msg: "Weight is Required" },
        },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Width is Required" },
          notNull: { msg: "Width is Required" },
        },
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Length is Required" },
          notNull: { msg: "Length is Required" },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Height is Required" },
          notNull: { msg: "Height is Required" },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Image is Required" },
          notNull: { msg: "Image is Required" },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Harga is Required" },
          notNull: { msg: "Harga is Required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
