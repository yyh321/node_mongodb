var mongoose = require('mongoose');
mongoose.connect('mongodb://172.105.230.41:27017/test?useNewUrlParser=true',{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('sussesssssssssssssss');
});