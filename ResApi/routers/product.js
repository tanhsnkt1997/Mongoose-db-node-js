const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        });



})


router.post('/', (req, res, next) => {
    const products = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    })
    products
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })

        .catch(err => {
            console.log('loi la dmm' + err)
            res.status(500).json({ error: err })
        });
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: products
    });
});


router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            }

            else {
                res.status(404).json({ message: 'not found' });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        });



})


module.exports = router