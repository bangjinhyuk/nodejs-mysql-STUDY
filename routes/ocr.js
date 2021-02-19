var express = require('express');
var router = express.Router();


/* GET ocr listing. */
router.get('/connect', function(req, res, next) {
  if(req.query.userEmail == 'bangjinhyuk'){
    res.send('connect all sucess');
  }else{
    res.send('connect little sucess');
  }
  
});

/* GET ocr listing. */
router.get('/connecting', function(req, res, next) {
  if(req.query.name == 'bbangi' && req.query.birth == '0103'){
    res.send(JSON.stringify(
        {"major1":"소웨", 
        "major2": "미디어", 
        "Class1":"1",
        "Class2":"2",
        "Class3":"3",
        "Class4":"4",
        "Class5":"5"}));
  }else{
    res.send('connecting little sucess');
  }
  
});

/* GET ocr listing. */
router.post('/semester', function(req, res, next) {
  res.send('{"code":-1, "msg": "failed"}');
  // if(req.body.semester == 'bbangi' && req.query.birth == '0103' ){
  //   res.send('connecting all sucess');
  // }else{
  //   res.send('connecting little sucess');
  // }
  
});

/* GET ocr listing. */
router.get('/', function(req, res, next) {
  // res.send(req.body.userEmail);
  
    res.send('connect');
  });


module.exports = router;