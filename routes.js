const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  console.log(req.method, req.originalUrl);
  const { user } = req.query;
  res.send({
    status: "Successfully",
    message: "Welcome to Express Js with Eduwork",
    user,
  });
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post("/product", upload.single("img"), (req, res) => {
  const { name, category, value } = req.body;
  const img = req.file;
  if (img) {
    const target = path.join(__dirname, "uploads", img.originalname);
    fs.renameSync(img.path, target);
    res.json({
      name,
      category,
      value,
      img,
    });
  }
});

router.get("/categories/:tag", (req, res) => {
  const { categories, tag } = req.params;
  res.json({ categories, tag });
});

module.exports = router;
