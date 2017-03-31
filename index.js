var express=require('express');
var app=express();
var ejs = require('ejs');

app.use(express.static('app/static'));
app.use(express.static('app/static/html'));


app.engine('html',ejs.__express);
app.set('views','./app/views');
app.set('view engine','html');


app.get('/demo/babel',function(req,res){
	console.log('访问了babel');
	
});

app.get('/',function(req,res){
	res.render('index',{title:"金飞的个人网站"});
});

app.get('/views', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/dt/babel',function(req,res){
	res.render('demoandtest/babel');
});

var server=app.listen(8051,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("app listing at http://%s:%s",host,port);
});