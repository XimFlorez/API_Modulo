const express = require('express');
const router = express.Router();
const {
    getCustomers,
    postCustomer,
    putCustomer,
    deleteCustomer
} = require('../controllers/customersController');



router.get('/Customers', getCustomers);
router.post('/Customers', postCustomer);
router.put('/Customers/:id', putCustomer);
router.delete('/Customers/:id', deleteCustomer);

module.exports = router;
