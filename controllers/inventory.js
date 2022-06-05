const sql = require('../config/db')



exports.getAllInventory = async (req, res, next) => {
    const query =  "SELECT L.locationID, E.equipmentID, locationAddress, manager, equipmentName, equipmentType, equipmentQuantity \
     from inventory\
    join Equipment E on Inventory.equipmentID = E.equipmentID\
    join Locations L on Inventory.locationID = L.locationID";
    sql.query(query, function(err, results){
        if(err || results.length == 0){
            console.log(err)
            res.json({status : "No Inventory"})
        }else{
            res.json(results)
        }
    })
}

exports.getInventory = (req, res, next) => {
    const query =  `SELECT locationID, equipmentID  locationAddress, manager, equipmentName, equipmentType, equipmentQuantity \
     from inventory\
    join Equipment E on Inventory.equipmentID = E.equipmentID\
    join Locations L on Inventory.locationID = L.locationID\
    WHERE L.locationID = ${req.params.id}`;
    console.log(query)
    sql.query(query, function(err, results){
        if(err || results.length == 0){
            res.json({status : "No Inventory found"})
        }else{
            res.json(results)
        }
    })
}

exports.createInventory = (req, res, next) => {

    const data = {
        locationID : req.body.locationID,
        equipmentID: req.body.equipmentID,
        equipmentQuantity : req.body.equipmentQuantity
    } 
    const query = "insert into Inventory (locationID, equipmentID, equipmentQuantity) VALUES (?, ?, ?)";
    
    
    sql.query(query, Object.values(data), function(err){
         if(err){
             res.json({status : err, reason: err.code});
         }else{
             res.json({status: "success", data: data})
         }
     })
 }

 exports.updateInventory = (req, res, next) => {
    const query = `UPDATE Inventory SET ? WHERE locationID = ${req.params.locationID} and  equipmentID = ${req.params.equipmentID}`
    console.log([req.body])
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteInventory = (req, res, next) => {
    const query = `DELETE from Inventory WHERE locationID = ${req.params.locationID} and  equipmentID = ${req.params.equipmentID}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}