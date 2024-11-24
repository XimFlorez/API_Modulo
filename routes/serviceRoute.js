const express = require('express');
const router = express.Router();
const {
    getServices,
    postServices,
    putServices,
    deleteServices,
    getServiceById
} = require('../controllers/ServicesController');


router.get('/Services/', getServices);
router.get('/Services/:id', getServiceById);
router.post('/Services/', postServices);
router.put('/Services/:id', putServices);
router.delete('/Services/:id', deleteServices);


module.exports = router;
