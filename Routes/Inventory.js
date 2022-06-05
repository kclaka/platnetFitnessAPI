const express = require('express')
const router = express.Router();
const { 
    getInventory,
    getAllInventory,
    createInventory,
    updateInventory,
    deleteInventory
} = require('../controllers/inventory')



router.route('/')
.get(getAllInventory)
.post(createInventory);

router.route('/:id')
.get(getInventory)


router.route('/:locationID/:equipmentID')
.put(updateInventory)
.delete(deleteInventory)

module.exports = router;