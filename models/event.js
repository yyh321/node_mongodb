
const db = require('../db')

const options = {}

const schema = new db.Schema({
    title: {
        type: String
    }
},options)

const Event = db.model('Event',schema)

module.exports = Event



