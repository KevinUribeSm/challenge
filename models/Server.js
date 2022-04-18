const express = require('express');
const cors = require('cors');
const product = require('../routers/product');
const db = require('../db/connection');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.productPath = '/api/products';

        //connection 
        this.dbConnection();

        //middlewares
        this.middlewares();

        //routes
        this.routes();
    }

    async dbConnection(){
        try {

            await db.authenticate();
            console.log('Base de datos online');
            
        } catch (error) {
            throw new Error( error ); 
        }
    }

    middlewares() {
        this.app.use(cors())
        this.app.use( express.static(__dirname+'/'));
    }

    routes() {
        
        this.app.use(this.productPath, product);

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }

}


module.exports = Server ; 