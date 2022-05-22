const sql = require('../config/db')

exports.getSchedules = async (req, res, next) => {
    const query =  "select * from schedules";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Transactions yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getSchedule = (req, res, next) => {
    const query =  `select * from schedules where scheduleID = ${req.params.id}`
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Customer found"})
        }else{
            res.json(results)
        }
    })
}

exports.createSchedule = (req, res, next) => {
   const data = {
       trainerID: req.body.trainerID,
       activity : req.body.activity,
       activityDays : req.body.activityDays,
       startTime : req.body.startTime,
       activityDays : req.body.activityDays,
       duration : req.body.duration,
       locationID : req.body.locationID,
   } 
   const query = "insert into Schedules (trainerID, activity, activityDays, startTime, duration, locationID) VALUES (?, ?, ?, ?, ?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateSchedule = (req, res, next) => {
    const query = `UPDATE Schedules SET ? WHERE scheduleID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteSchedule = (req, res, next) => {
    const query = `DELETE from Schedules where scheduleID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}