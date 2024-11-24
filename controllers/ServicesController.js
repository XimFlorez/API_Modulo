const { Schema, model } = require('mongoose');
const Services = require('../models/Services');


// Método GET
const getServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Método POST
const postServices = async (req, res) => {
    const msg = 'Service inserted';
    const body = req.body;
    try {
        const service = new Services(body);
        await service.save();
        res.json({ msg: msg });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};


// Método PUT (actualizar un servicio)
const putServices = async (req, res) => {
    try {
        const { ID_Service } = req.params;
        const { Name, Price, Category, Observation } = req.body;
        const serviceUpdated = await Services.findOneAndUpdate(
            ID_Service,
            {
                Name: Name,
                Price: Price,
                Category: Category,
                Observation: Observation
            },
            { new: true }
        );
        if (!serviceUpdated) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(serviceUpdated);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};


// Método DELETE (eliminar un servicio)
const deleteServices = async (req, res) => {
    try {
        const { id } = req.params;
        const serviceDeleted = await Services.findOneAndDelete({ ID_Service: id});

        if (!serviceDeleted) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// const byId = async (req, res) => {
//     try {
//         const { ID_Service } = req.params;
//         const serviceID = await Services.findOne({ ID_Service: ID_Service });

//         if (!serviceID) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
//         res.json({ message: 'Servicio obtenido.', data: serviceID });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const byId = async (req, res) => {
//     try {
//         const services = await Services.findById(req.params.id);
//         res.json(services);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const getServiceById = async (req, res) => {
    try {
        const service = await Services.findById(req.params.id)
        res.status(200).json(service)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Service not found' })
    }
}


module.exports = {
    getServices,
    postServices,
    putServices,
    deleteServices,
    getServiceById
};
