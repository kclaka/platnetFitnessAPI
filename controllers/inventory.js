const sql = require('../config/db')



exports.getAllInventory = async (req, res, next) => {
    const query =  "SELECT locationAddress, manager, equipmentName, equipmentType, equipmentQuantity \
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
    const query =  `SELECT locationAddress, manager, equipmentName, equipmentType, equipmentQuantity \
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
    const query = `UPDATE Inventory SET ? WHERE equipmentID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}