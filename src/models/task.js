const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum : ['pending', 'ongoing', 'completed'],
        required: true
    },
    created_at: {
        type: Date,
        required : true,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', TaskSchema);