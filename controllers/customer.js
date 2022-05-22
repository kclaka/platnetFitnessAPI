const sql = require('../config/db')



exports.getCustomers = async (req, res, next) => {
    const query =  "select * from customers";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Customers yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getCustomer = (req, res, next) => {
    const query =  `select * from customers where customerID = ${req.params.id}`
    console.log(query)
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Customer found"})
        }else{
            res.json(results)
        }
    })
}

exports.createCustomer = (req, res, next) => {

   const data = {
       fname: req.body.fname,
       lname : req.body.lname,
       pronouns : req.body.pronouns,
       age :req.body.age,
       customerAddress : req.body.customerAddress,
       email : req.body.email,
       membershipType : req.body.membershipType,
       hasActiveMembership : req.body.hasActiveMembership
   } 
   const query = "INSERT INTO Customers (fname, lname, pronouns, age, customerAddress, email,   membershipType, hasActiveMembership) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateCustomer = (req, res, next) => {
    const query = `UPDATE customers SET ? WHERE customerID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteCustomer = (req, res, next) => {
    const query = `DELETE from customers where customerID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}


