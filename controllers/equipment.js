const sql = require('../config/db')

exports.getAllEquipment = async (req, res, next) => {
    const query =  "select * from equipment";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Equipment yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getEquipment = (req, res, next) => {
    const query =  `select * from equipment where equipmentID = ${req.params.id}`
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Equipment found"})
        }else{
            res.json(results)
        }
    })
}

exports.createEquipment = (req, res, next) => {
   const data = {
        equipmentType: req.body.equipmentType,
        equipmentName : req.body.equipmentName
   } 
   const query = "insert into Equipment (equipmentType, equipmentName) VALUES (?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateEquipment = (req, res, next) => {
    const query = `UPDATE Equipment SET ? WHERE equipmentID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteEquipment = (req, res, next) => {
    const query = `DELETE from Equipment where equipmentID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}