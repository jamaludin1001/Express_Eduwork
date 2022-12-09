const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./app/product/router");
const productRouterV2 = require("./app/product_v2/routers");
const logger = require ("morgan");

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1", productRouter);
app.use("/api/v2", productRouterV2);
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  res.status(404);
  res.send({
    status: "Failed",
    message: "Resource " + req.originalUrl + " Not Found",
  });
  next();
});
app.listen(process.env.PORT ? process.env.PORT : 3000, () => {
  var port = process.env.PORT ? process.env.PORT : 3000;
  console.log("Server: http://127.0.0.1:" + port);
});

// di heroku ada environment variable PORT
// heroku ada variable PORT = 34534
// process.env.PORT itu adalah cara manggil variable PORT yang ada di heroku
