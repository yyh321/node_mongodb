
const Event = require('../models/event')

Event.findByIdAndDelete('5c06cea78505b41a687b0433')
    .then(document => console.log(document))
