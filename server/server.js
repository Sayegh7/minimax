var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//app.use(express.static('./public'));
app.get("/", function(req, res){
//	res.sendFile(__dirname + "/public/index.html");
res.sendFile(__dirname + "/sio.html");

})

app.get('/comments', function(req, res){
	console.log("hit")
	var data = require('./comments.json');
res.send(JSON.stringify(data));
})
http.listen(8000, function () {
	console.log("listening on port 8000")
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
	console.log(msg)
    io.emit('chat message', msg);
  });
});