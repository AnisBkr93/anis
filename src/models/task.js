const mongoose = require('mongoose');
const date = new Date();
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: false
    },
    dueDate : {
        type: Date,
        required: false
    },

    created_at: {
        type: Date,
        required : false,
        default: date
    },

    updated_at: {
        type: Date,
        required : false,
        default: date
    }
});

// middleware to update the updated_at field before saving
TaskSchema.pre('save', function(next) {
    this.updated_at = date;
    next();
});



module.exports = mongoose.model('Task', TaskSchema);