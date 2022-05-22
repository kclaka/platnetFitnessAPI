const sql = require('../config/db')

exports.getLocations = async (req, res, next) => {
    const query =  "select * from locations";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Locations yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getLocation = (req, res, next) => {
    const query =  `select * from locations where locationID = ${req.params.id}`
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No location found"})
        }else{
            res.json(results)
        }
    })
}

exports.createLocation = (req, res, next) => {
   const data = {
        locationAddress: req.body.locationAddress,
        manager : req.body.manager
   } 
   const query = "insert into Locations (locationAddress, manager) VALUES (?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateLocation = (req, res, next) => {
    const query = `UPDATE Locations SET ? WHERE locationID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteLocation = (req, res, next) => {
    const query = `DELETE from Locations where locationID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}