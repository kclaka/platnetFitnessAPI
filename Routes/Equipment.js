const express = require('express')
const router = express.Router();
const { 
    getEquipment,
    getAllEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment
} = require('../controllers/equipment')



router.route('/')
.get(getAllEquipment)
.post(createEquipment);

router.route('/:id')
.get(getEquipment)
.put(updateEquipment)
.delete(deleteEquipment)

module.exports = router;