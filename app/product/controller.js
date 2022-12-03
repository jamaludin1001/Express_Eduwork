const connection = require("../../config/mysql");
const path = require("path");
const fs = require("fs");

const index = (req, res) => {
  const {search} = req.query;
  let exec = {};
  if (search){
      exec = {
          sql: "SELECT * FROM products WHERE nama_produk LIKE ?",
          values: [`%${search}%`]
      }
  } else {
      exec = {
          sql: "SELECT * FROM products"
      }
  }
  connection.query(exec, _response(res));
}

const view = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM products WHERE id= ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

const store = (req, res) => {
  const { users_id, nama_produk, harga, stok, status } = req.body;
  const image_url = req.file;
  if (image_url) {
    const target = path.join(
      __dirname,
      "../../uploads",
      image_url.originalname
    );
    fs.renameSync(image_url.path, target);
    connection.query(
      {
        sql: "INSERT INTO products (nama_produk, harga, stok, status, image_url, users_id) VALUES (?, ?, ?, ?, ?, ?)",
        values: [
          nama_produk,
          parseInt(harga),
          stok,
          status,
          `http://localhost/5000/public/${image_url.originalname}`,
          parseInt(users_id),
        ],
      },
      _response(res)
    );
  }
};

const update = (req, res) => {
  const { users_id, nama_produk, harga, stok, status } = req.body;
  const image_url = req.file;
  let sql = "";
  let values = [];
  if (image_url) {
    const target = path.join(
      __dirname,
      "../../uploads",
      image_url.originalname
    );
    fs.renameSync(image_url.path, target);
    sql =
      "UPDATE products SET nama_produk = ?, harga = ?, stok = ?, status = ?, image_url = ?, users_id = ? WHERE id = ?";
    values = [
      nama_produk,
      parseInt(harga),
      stok,
      status,
      `http://localhost:5000/public/${image_url.originalname}`,
      parseInt(users_id),
      req.params.id,
    ];
  } else {
    (sql =
      "UPDATE products SET nama_produk = ?, harga = ?, stok = ?, status = ?, users_id = ? WHERE id = ?"),
      (values = [
        nama_produk,
        parseInt(harga),
        stok,
        status,
        req.params.id,
        parseInt(users_id),
      ]);
  }
  connection.query({ sql, values }, _response(res));
};

const destroy = (req, res) => {
  connection.query(
    {
      sql: "DELETE FROM products WHERE id = ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

const _response = (res) => {
  return (error, result) => {
    if (error) {
      res.send({
        status: "failed",
        response: error,
      });
    } else {
      res.send({
        status: "succes",
        response: result,
      });
    }
  };
};
module.exports = {
  index,
  view,
  store,
  update,
  destroy,
};
