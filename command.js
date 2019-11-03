const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commandSchema = new Schema({
    student:{
        type: Schema.Types.ObjectId,
        ref : 'Student'
    },
    teacher:[{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    manager:{
        type: Schema.Types.ObjectId,
        ref: 'Manager'
    },
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    progress:{
        type: Schema.Types.ObjectId,
        ref: 'Progress'
    }
})

module.exports = mongoose.model('Command',commandSchema)