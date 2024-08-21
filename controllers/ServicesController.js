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
    }
};


// Método PUT (actualizar un servicio)
const putServices = async (req, res) => {
    try {
        const { id } = req.params;
        const serviceUpdated = await Services.findByIdAndUpdate(id, req.body, { new: true });
        if (!serviceUpdated) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(serviceUpdated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Método DELETE (eliminar un servicio)
const deleteServices = async (req, res) => {
    try {
        const { id } = req.params;
        const serviceDeleted = await Services.findByIdAndDelete(id);

        if (!serviceDeleted) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getServices,
    postServices,
    putServices,
    deleteServices
};
