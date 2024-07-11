const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
});

userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
        // example of bcrypt hash az123 to $2a$08$3Q6z7Z6z7Z6z7Z6z7Z6z7eQ
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;