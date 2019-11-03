const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
    student:[{
        type: Number,
        required: true
    }],
    name:[{
        type: String,
    required: true
    }],
    kind:{
        type: String,
        required: true
    },
    resource:[{
        type: Schema.Types.ObjectId,
        ref: 'Resource'
    }],
    timestamp:{
        type: Schema.Types.ObjectId,
        ref: 'Timestamp'
    },
    videoLecture:[{
        type: Schema.Types.ObjectId,
        ref: 'VideoLecture'
    }],
    discussion:[{
        type: Schema.Types.ObjectId,
        ref: 'Discussion'
    }],
    description:{
        type: Schema.Types.ObjectId,
        ref: 'Description'
    },
    rating:[{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    course:{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
    

})

module.exports = mongoose.model('Topic',topicSchema)