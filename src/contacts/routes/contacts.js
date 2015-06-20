var express = require('express');
var router = express.Router();
var details = new Array(),i=0;
var message_details = new Array();
/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.send(details[req.params.id]);
});

router.post('/', function(req, res, next) {
	//var fs = require('fs');
	//console.log(req.body);
	//var temp = ""+req.params.id;
	//var path='D:/nodejs/mrnd-nodejs-master/spec/tests/Data/0-contacts.json';
	//fs.open(path,'w',function(err,fd){
	//if(err)
	//{
	//	throw 'error opening a file:'+err;
	//}
	//});
	//fs.writeFile('path', req.body, function (err) {
	//if (err) throw err;
	//});
	details[i++]=req.body;
	res.send(""+(i-1));
	console.log(req.body);
});

router.put('/:id', function(req, res, next) {
	var a1=req.body;
	var a2=details[+req.params.id];
	for(i in a1)
		a2[i]=a1[i];
	details[+req.params.id]=a2;
	res.send(a2);
  console.log(req.body);

});

router.post('/:id/message', function(req, res, next) {
	if(message_details[req.params.id]==undefined)
		message_details[(req.params.id)]=[];
	message_details[(req.params.id)].push(req.body);
	res.send(""+(req.params.id));
	console.log(req.body);
});

router.get('/:id/message', function(req, res, next){
	console.log("helloget");
	res.send(JSON.stringify(message_details[req.params.id]));
});
module.exports = router;
