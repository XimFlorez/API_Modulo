const express = require('express');
const cors = require('cors'); // Importa el paquete CORS

const dbConnect = require('../database/config');
dbConnect();
const customerRoutes = require('../routes/customerRoute');
const { postServices, getServices, putServices, deleteServices, getServiceById } = require('../controllers/ServicesController');
const { postCustomer, getCustomers, putCustomer, deleteCustomer } = require('../controllers/customersController');

class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();

        this.pathServices = '/api/Services';
        this.pathCustomers = '/api/Customers';

        this.route();
    }

    async dbConnection() {
        await dbConnect;
    }

    route() {
        this.app.use(express.json());

        // Habilita CORS globalmente
        this.app.use(cors()); // Esto permite solicitudes desde cualquier origen


        // Rutas para los servicios
        this.app.get(this.pathServices, getServices);
        this.app.get(this.pathServices + '/:id', getServiceById);
        this.app.post(this.pathServices, postServices);
        this.app.put(this.pathServices + '/:id', putServices);  
        this.app.delete(this.pathServices + '/:id', deleteServices);

        // Rutas para los clientes
        this.app.get(this.pathCustomers, getCustomers);
        this.app.post(this.pathCustomers, postCustomer);
        this.app.put(this.pathCustomers + '/:id', putCustomer);  
        this.app.delete(this.pathCustomers + '/:id', deleteCustomer);
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}

module.exports = Server;
