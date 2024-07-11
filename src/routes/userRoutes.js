const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/' ,  (req, res) => {
    res.send('user API is working !');   
});

//register user
 
router.post('/register', async (req, res) => {
    const { name , email , password } = req.body;
    try {
        const user = new User(req.body);
        try {
            await user.save();
        } catch (error) {
            res.status(400).send({error : 'We cannot save the user to the database'});
        }
        res.status(201).send({user , message : 'User created successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
}
);

router.post('/login', async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).send({error : 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).send({error : 'Invalid login credentials'});
        }
        const token = jwt.sign({id : user._id.toString()}, process.env.JWT_SECRET, {expiresIn : '1h'});
        res.send({ user , token , message : 'User logged in successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
} 
);




module.exports = router;