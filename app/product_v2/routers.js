const router = require("express").Router();
const multer = require("multer");
const Product = require("./model");
const path = require("path");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
const productController = require("./controllers");

router.post('/products', upload.single('image_url'), productController.store);
router.get('/products/:id', productController.view);
router.get('/products', productController.index);
router.put('/products/:id', upload.single('image_url'), productController.update);
router.delete('/products/:id', productController.destruct);
// router.post("/products", upload.single ("image_url"), async (req, res) => {
//   const { nama_produk,harga, stok, status,users_id} = req.body;
//   const image_url = req.file;
//   if (image_url) {
//     const target = path.join(
//       __dirname,
//       "../../uploads",
//       image_url.originalname
//     );
//     fs.renameSync(image_url.path, target);

//     try {
//       await Product.sync();
//       const result = await Product.create({
        
//         nama_produk,
//         harga,
//         stok,
//         status,
//         image_url: `http://localhost/5000/public/${image_url.originalname}`,
//         users_id,
//       });
//       res.send(result);
//     } catch (e) {
//       res.send(e);
//     }
//   }
// });

module.exports = router;
