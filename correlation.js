const mongoose = require('mongoose')
const Schema = mongoose.Schema

const correlationSchema = new Schema({
    timeStamp:{
        type: Schema.Types.ObjectId,
        ref : 'Timestamp'
    },
    artifact:[{
        type: Schema.Types.ObjectId,
        ref: 'Artifact'
    }],
    resource:{
        type: Schema.Types.ObjectId,
        ref: 'Resource'
    },
    organisation:[{
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }]
})

module.exports = mongoose.model('Correlation',correlationSchema)