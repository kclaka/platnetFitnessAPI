const express = require('express')
const router = express.Router();
const { 
    getSchedules,
    getSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
} = require('../controllers/schedules')



router.route('/')
.get(getSchedules)
.post(createSchedule);

router.route('/:id')
.get(getSchedule)
.put(updateSchedule)
.delete(deleteSchedule)

module.exports = router;