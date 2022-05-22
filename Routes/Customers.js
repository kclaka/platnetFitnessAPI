const express = require('express')
const router = express.Router();
const { 
    getCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
} = require('../controllers/customer')



router.route('/')
.get(getCustomers)
.post(createCustomer);

router.route('/:id')
.get(getCustomer)
.put(updateCustomer)
.delete(deleteCustomer)

module.exports = router;