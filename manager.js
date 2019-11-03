const mongoose = require('mongoose')
const Schema = mongoose.Schema

const managerSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    mobileNumber:{
        type: Number,
        required:true
    },
    course:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    organization:{
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    },
    organizationEmail:{
        type: Schema.Types.ObjectId,
        ref: 'OrganizationEmail'
    },
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    research:[{
        type: Schema.Types.ObjectId,
        ref: 'Research'
    }],
    teacher:[{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }]
})

module.exports = mongoose.model('Manager',managerSchema)