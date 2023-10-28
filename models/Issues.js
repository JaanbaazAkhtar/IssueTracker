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
    }
});

module.exports = mongoose.model('Issues', issuesSchema);