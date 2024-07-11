const mongoose = require('mongoose');
const date = new Date();
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status : {
        type: String,
        required: true
    },
    dueDate : {
        type: Date,
        required: true
    },

    created_at: {
        type: Date,
        required : true,
        default: date
    },

    updated_at: {
        type: Date,
        required : true,
        default: date
    }
});

// middleware to update the updated_at field before saving
TaskSchema.pre('save', function(next) {
    this.updated_at = date;
    next();
});



module.exports = mongoose.model('Task', TaskSchema);