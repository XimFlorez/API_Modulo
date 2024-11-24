const { Schema, model } = require('mongoose');
const Customers = require('../models/Customers');


const getCustomers = async (req, res) => {
    try {
        const customers = await Customers.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postCustomer = async (req, res) => {
    const msg = 'Customer inserted';
    const body = req.body;
    try {
        const customer = new Customers(body);
        await customer.save();
        res.json({ msg: msg });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const putCustomer = async (req, res) => {
    try {
        const {ID_Customer} = req.params;
        const {Name,Lastname,Document,Email,Telephone} = req.body;
        const customerUpdated = await Customers.findOneAndUpdate(
            ID_Customer,
            {
                Name: Name,
                Lastname: Lastname,
                Document: Document,
                Email: Email,
                Telephone:Telephone
            },
            {new : true}
        );
        if (!customerUpdated) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customerUpdated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customerDeleted = await Customers.findOneAndDelete({ID_Customer:id});

        if (!customerDeleted) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getCustomers,
    postCustomer,
    putCustomer,
    deleteCustomer
};
