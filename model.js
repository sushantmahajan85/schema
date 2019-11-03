const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    timestamp:{
        type: Schema.Types.ObjectId,
        ref : 'Timestamp'
    },
    correlations:{
        type: Schema.Types.ObjectId,
        ref: 'Correlations'
    },
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    }
})

module.exports = mongoose.model('Model',modelSchema)