const { Router } = require('express');
const { getProducts, getEnergetica, getPisco, getRon, getBebida, getSnack, getCerveza, getVodka } = require('../controllers/product');


const router = Router();

router.get('/', getProducts);
router.get('/energetica', getEnergetica);
router.get('/pisco', getPisco);
router.get('/ron', getRon);
router.get('/bebida', getBebida);
router.get('/snack', getSnack);
router.get('/cerveza', getCerveza);
router.get('/vodka', getVodka);




module.exports = router;