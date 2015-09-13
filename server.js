var express = require('express');
app = express();
bodyParser = require('body-parser');
meetupController = require('./server/controller/meetupController')
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/firstmean')

app.use(bodyParser());

app.get('/',function(req,res){
	res.sendFile(__dirname+'/client/view/index.html');
});

app.use('/js',express.static(__dirname+'/client/js'));


app.get('/api/meetup',meetupController.list);
app.post('/api/meetup',meetupController.create);

app.listen(3000,function(){
	console.log("Listening");
});
