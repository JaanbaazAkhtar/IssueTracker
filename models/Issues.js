const mongoose = require('mongoose');

const issuesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    labels: { 
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    }
});

module.exports = mongoose.model('Issues', issuesSchema);