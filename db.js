const mongoose = require('mongoose')

const uri = 'mongodb://172.105.230.41:27017/revent'

const op = {useNewUrlParser:true}
mongoose.Promise = global.Promise
mongoose.connect(uri,op).then(db=>console.log('connection success')).catch(error=>console.log('connection error:',error))

module.exports = mongoose;

