const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contractSchema = new Schema({
    
    affliation:{
        type: Schema.Types.ObjectId,
        ref: 'Affliation'
    },
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    admin:[{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    }],
    advertiser:{
        type: Schema.Types.ObjectId,
        ref: 'Advertiser'
    },
    name:{
        type: String,
        
    }
    

})

module.exports = mongoose.model('Contract',contractSchema)