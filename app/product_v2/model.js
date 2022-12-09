const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");

const Product = sequelize.define(
  "products",
  {
    // Model attributes are defined here

    nama_produk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
    type: DataTypes.TIME,
    allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Product;
