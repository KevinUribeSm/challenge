const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    url_image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    discount: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    createdAt:false,
    updatedAt:false,
    freezeTableName: true
}
);

module.exports = Product;