var express=require('express');
var app=express();

app.use(express.static('app/html'));
app.use(express.static('app'));

app.get('/',function(req,res){
	console.log('访问了/');
	// res.send("完成了访问");
	res.download("LICENSE");
});

var server=app.listen(8051,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("app listing at http://%s:%s",host,port);
});