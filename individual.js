const mongoose = require('mongoose')
const Schema = mongoose.Schema

const individualSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    mobileNumber:{
        type: Number,
        required:true
    },
    targetAudience:{
        type: Schema.Types.ObjectId,
        ref: 'TargetAudience'
    },
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    reward:[{
        type: Schema.Types.ObjectId,
        ref: 'Reward'
    }],
    artifact:[{
        type: Schema.Types.ObjectId,
        ref: 'Artifact'
    }]
   
})

module.exports = mongoose.model('Individual',individualSchema)