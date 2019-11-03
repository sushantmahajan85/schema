const mongoose = require('mongoose')
const Schema = mongoose.Schema

const advertiserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        
    },
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    contract:[{
        type: Schema.Types.ObjectId,
        ref: 'Contract'
    }],
    

})

module.exports = mongoose.model('Advertiser',advertiserSchema)