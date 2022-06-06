const sql = require('../config/db')

exports.getTransactions = async (req, res, next) => {
    const query =  "SELECT transactionID, CONCAT(c.fname, ' ' ,c.lname) AS CustomerName, amount, transactionDate\
    from transactions\
    join customers c on c.customerID = transactions.CustomerID";
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Transactions yet"})
        }else{
            res.json(results)
        }
    })
}

exports.getTransaction = (req, res, next) => {
    const query =  `SELECT transactionID, CONCAT(c.fname, ' ' ,c.lname) AS CustomerName, amount, transactionDate
    from transactions
    join customers c on c.customerID = transactions.CustomerID 
    where transactionID = ${req.params.id}`
    sql.query(query, function(err, results){
        if(err){
            res.json({status : "No Transactions found"})
        }else{
            res.json(results)
        }
    })
}

exports.createTransaction = (req, res, next) => {
   const data = {
       CustomerID: req.body.CustomerID,
       amount : req.body.amount,
       transactionDate : req.body.transactionDate
   } 
   const query = "insert into Transactions (CustomerID, amount, transactionDate) VALUES (?, ?, ?)";
   
   
   sql.query(query, Object.values(data), function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: data})
        }
    })
}

exports.updateTransaction = (req, res, next) => {
    const query = `UPDATE Transactions SET ? WHERE transactionID = ${req.params.id}`
    sql.query(query, [req.body], function(err){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: req.body})
        }
    })
}

exports.deleteTransaction = (req, res, next) => {
    const query = `DELETE from Transactions where transactionID = ${req.params.id}`;
    sql.query(query, function(err, result){
        if(err){
            res.json({status : err, reason: err.code});
        }else{
            res.json({status: "success", data: result})
        }
    })
}