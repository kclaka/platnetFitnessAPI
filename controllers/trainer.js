const sql = require('../config/db')

exports.getTrainers = async (req, res, next) => {
    const query =  "select * from trainers";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Transactions yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getTrainer = (req, res, next) => {
    const query =  `select * from trainers where trainerID = ${req.params.id}`
    sql.query(query, function(err, results){
        if(err){
            res.json({status : err, reason: err.code})
        }else{
            res.json(results)
        }
    })
}

exports.createTrainer = (req, res, next) => {
   const data = {
       trainerName: req.body.trainerName,
       salary : req.body.salary,
       email : req.body.email
   } 
   const query = "insert into Trainers (trainerName, salary, email) VALUES (?, ?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateTrainer = (req, res, next) => {
    const query = `UPDATE Trainers SET ? WHERE trainerID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteTrainer = (req, res, next) => {
    const query = `DELETE from Trainers where trainerID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}