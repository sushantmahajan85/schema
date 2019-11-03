const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doubtSchema = new Schema({
    student:{
        type: Schema.Types.ObjectId,
        ref : 'Student'
    },
    teacher:{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
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
    question:{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }
})

module.exports = mongoose.model('Doubt',doubtSchema)