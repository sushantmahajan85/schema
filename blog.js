const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    punchLine:{
        type: String
    },
    
    manager:{
        type: Schema.Types.ObjectId,
       ref: 'Manager'
    },
    organisation:{
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    },
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    skill:[{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }],
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    title:{
        type: String,
        
    },
    blody:{
        type: String,
        
    }
    

})

module.exports = mongoose.model('Blog',blogSchema)