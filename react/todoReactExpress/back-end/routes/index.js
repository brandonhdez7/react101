var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/addTask',(req, res)=>{
  const taskName = req.body.taskName;
  const taskDate = req.body.taskDate;
  const insertQuery = `INSERT INTO task(taskName, taskDate)
  VALUES (?,?)`;
  connection.query(insertQuery,[taskName,taskDate],(error,results)=>{
    if(error){throw error}
    const getTaskQuery = `SELECT * FROM task`;
    connection.query(getTaskQuery,(error2,results2)=>{
      if(error2){throw error2}
      res.json(results2)
    })
  })
  // res.json({taskName,taskDate})

});

router.get('/getTasks/:tid',(req,res)=>{
  const tid = req.params.tid;
  const selectTaskQuery = `SELECT * FROM tasks WHERE id = ?`;
  connection.query(selectTaskQuery,[tid],(err,results)=>{
    if(err){throw err}
    res.json({task: result[0]});
  })

})

module.exports = router;
