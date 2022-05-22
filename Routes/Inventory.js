const express = require('express')
const router = express.Router();
const { 
    getInventory,
    getAllInventory,
    createInventory
} = require('../controllers/inventory')



router.route('/')
.get(getAllInventory)
.post(createInventory);

router.route('/:id')
.get(getInventory)
// .put(updateCustomer)
// .delete(deleteCustomer)

module.exports = router;