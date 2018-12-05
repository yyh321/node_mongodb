const Event = require('../models/event')

Event.find()
    .then(documents => console.log('\nfind 所有的文档:\n',documents))

Event.find({title: 'Node.js 开发者大会'})
.then(documents => console.log('\nfind 指定标题的文档\n',documents))

Event.findOne({title: 'Node.js 开发者大会'})
.then(document => console.log('\nfind one 指定标题的文档\n',document))

Event.findOne({_id: '5c06cea78505b41a687b0434'})
.then(document => console.log('\nfind one 指定id的文档\n',document))

Event.findById({_id: '5c06cea78505b41a687b0435'})
.then(document => console.log('\nfind byId 指定id的文档\n',document))