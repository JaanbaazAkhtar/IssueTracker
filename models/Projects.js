const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    isssues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issues'
    }]
});

module.exports = mongoose.model('Projects', projectsSchema);