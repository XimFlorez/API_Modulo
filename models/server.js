const express = require('express');
const dbConnect = require('../database/config');
const { postServices, getServices, putServices, deleteServices } = require('../controllers/ServicesController');

class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();
        this.pathServices = '/api/Services';
        this.route();
    }

    async dbConnection() {
        await dbConnect;
    }

    route() {
        this.app.use(express.json());
        this.app.get(this.pathServices, getServices);
        this.app.post(this.pathServices, postServices);
        this.app.put(this.pathServices, putServices);
        this.app.delete(this.pathServices + '/:id', deleteServices);
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`);
        });
    }
}

module.exports = Server;
