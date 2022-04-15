const Product = require("../models/Product")

const getProducts = async(req, res) => {
    const product = await Product.findAll();
    res.json({
        product
    })
}

const getEnergetica = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 1
        }
    });

    res.json({
        product
    })
}


const getPisco = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 2
        }
    });

    res.json({
        product
    })
}

const getRon = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 3
        }
    });

    res.json({
        product
    })
}

const getBebida = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 4 
        }
    });

    res.json({
        product
    })
}

const getSnack = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 5
        }
    });

    res.json({
        product
    })
}

const getCerveza = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 6
        }
    });

    res.json({
        product
    })
}

const getVodka = async(req, res) => {
    const product = await Product.findAll({
        where: {
            category: 7
        }
    });

    res.json({
        product
    })
}




module.exports = {
    getProducts,
    getEnergetica,
    getPisco,
    getRon,
    getBebida,
    getSnack,
    getCerveza,
    getVodka
}