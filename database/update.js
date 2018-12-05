
const Event = require('../models/event')

let id = '5c06cea78505b41a687b0435'
let body = {
    title: 'Google Angular7.3 开发者大会'
}

Event.findOneAndUpdate(id, {$set: body}, {new: true})
    .then(document => console.log(document))





