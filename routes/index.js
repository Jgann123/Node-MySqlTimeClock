var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'timecloc.mysql.database.azure.com',
  user: 'JGann123@timecloc',
  password: 'Nicole18' ,
  port: '3306',
  database: 'time_clock'
  
 
});
 
connection.connect(
  function(err){
      if(err){
        console.error(err.message)
      }
      console.log('YAY! you are now connected to the database!')
    })
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/leads', function(req, res, next) {
//   res.render('leads');
// });

module.exports = router;
router.post('/leads', function(req, res, next) {
  console.log(req.body);
  const newlead = { 
    event_id: req.body.event_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    appt_date: req.body.appt_date,
    appt_time: req.body.appt_time

    
  };

}); 

router.post('/clockedIn', function(req, res) {

 
  connection.query("Insert into clocked_in (first_name,last_name) VALUES ('"+req.body.first_name+"','"+req.body.last_name+"')",function(err, result)   
  {                                                      
    if (err)
       throw err;
  });
  });
 var app = require('http');``

 router.get('/clockedIn', function(req, res, next) {
  res.render('/clockedIn', { Message: 'Success!' });
});



router.post('/clockOut', function(req, res) {

  connection.query("Insert into clocked_out (first_name,last_name) VALUES ('"+req.body.first_name+"','"+req.body.last_name+"')",function(err, result)   
  {                                                      
    if (err)
       throw err;
  });
  });
 var app = require('http');``
