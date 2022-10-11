const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const fs = require ('fs');
const path = require ('path');

router.get('/', (req, res) =>{
    console.log(req.method, req.originalUrl)
    const {user} = req.query;
    res.send({
        author:'Jamaludin Saputra',
        status:'Successfully',
        message: 'Welcome to Express Js with Eduwork',
        user
    });
});

router.get('/product/:tag', (req, res)=>{
    const {product, tag} = req.params;
    res.json({product, tag})
    });

router.post('/category/',upload.single('img'), (res, req) => {
   const {name, category, value} = req.body
   const img = req.file;
   if (img){
        const target = path.join(__dirname, 'uploads', img.originalUrl);
        fs.renameSync(img.path,target);
   }
   res.json({
    name,
    category,
    value,
    img
   })
});

module.exports = router;