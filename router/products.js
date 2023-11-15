const express = require('express')
const router = express.Router()

const { all_product, product_by_id, delete_product, update_product, create_product } = require('../controller/products')

router.get('/product-by-id', product_by_id)
router.get('/all-products',all_product)

router.post('/create-product',create_product)

router.put('/update-product',update_product)

router.delete('/delete-product',delete_product)

module.exports = router