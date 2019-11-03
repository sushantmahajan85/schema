const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String
    },
    course:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    stream:[{
        type: Schema.Types.ObjectId,
        ref: 'Stream'
    }],
    teacher:[{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    manager:[{
        type: Schema.Types.ObjectId,
        ref: 'Manager'
    }],
    year:[{
        type: Schema.Types.ObjectId,
        ref: 'Year'
    }],
    infographic:[{
        type: Schema.Types.ObjectId,
        ref: 'Infographic'
    }],
    student:[{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

module.exports = mongoose.model('Organization',organizationSchema)