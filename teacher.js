const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    course:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    batch:[{
        type: Schema.Types.ObjectId,
        ref: 'Batch'
    }],
    chat:[{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }],
    student:[{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    topic:[{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }]
})

module.exports = mongoose.model('Teacher',teacherSchema)