const sql = require('../config/db')



exports.getAllInventory = async (req, res, next) => {
    const query =  "SELECT locationAddress, manager, equipmentName, equipmentType \
     from inventory\
    join Equipment E on Inventory.equipmentID = E.equipmentID\
    join Locations L on Inventory.locationID = L.locationID";
    sql.query(query, function(err, results){
        if(err){
            console.log(err)
            res.json({status : "No Inventory yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getInventory = (req, res, next) => {
    const query =  `SELECT locationAddress, manager, equipmentName, equipmentType \
     from inventory\
    join Equipment E on Inventory.equipmentID = E.equipmentID\
    join Locations L on Inventory.locationID = L.locationID\
    WHERE L.locationID = ${req.params.id}`;
    console.log(query)
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Inventory found"})
        }else{
            res.json(results)
        }
    })
}

exports.createInventory = (req, res, next) => {

    const data = {
        equipmentID: req.body.equipmentID,
        locationID : req.body.locationID
    } 
    const query = "INSERT INTO inventory (equipmentID, locationID) VALUES (?, ?)";
    
    
    sql.query(query, Object.values(data), function(err){
         if(err){
             res.json({status : err, reason: err.code});
         }else{
             res.json({status: "success", data: data})
         }
     })
 }