const {Sequelize} = require('sequelize');

const db = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',
    //logging: false
});

module.exports = db;