const express = require('express')
const router = express.Router();
const { 
    getInventory,
    getAllInventory,
    createInventory,
    updateInventory
} = require('../controllers/inventory')



router.route('/')
.get(getAllInventory)
.post(createInventory);

router.route('/:id')
.get(getInventory)
.put(updateInventory)
// .delete(deleteCustomer)

module.exports = router;