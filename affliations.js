const mongoose = require('mongoose')
const Schema = mongoose.Schema

const affliationSchema = new Schema({
    contract:[{
        type: Schema.Types.ObjectId,
        ref : 'Contract'
    }],
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    name:{
        type:String,
        required: true
        },
    
})

module.exports = mongoose.model('Affliation',affliationSchema)

