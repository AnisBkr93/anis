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
    const { username , email , password } = req.body;
    try {
        const user = new User(req.body);
        await user.save();
        console.log('user created is : ' , user);
        res.status(201).send({user , message : 'User created successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
}
);

     

    

// router.post('/login', async (req, res) => {
//     try { 
//     const { name } = req.body;
//     const { email } = req.body;
//     const existingUser = await User.findOne({ name : name });
//     const existingEmail = await User.findOne({ email : email });
//     if (existingUser) {
//         return res.send({ message: 'User already exists' });
//     }
//     if (existingEmail) {
//         return res.send({ message: 'Email already exists' });
//     }

//     const newUser = new User({
//         username : req.body.username,
//         email : req.body.email,
//         password : req.body.password
//     });
//     await newUser.save();
//     res.send({ message: 'User created  successfully' });
// } catch (error) {
//         res.status(400).send(error);
//     } 

// });

// to do later 
// router.get('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const existingUser = await User.findOne({ email });
//         if (!existingUser) {
//             return res.send({ message: 'User does not exist' });
//         }
//         bcrypt.compare(password, existingUser.password, (err, result) => {
//             if(result) {
//                 const authClaims 
//                 const token = jwt.sign({ email: existingUser.email }, '

//     } catch (error) {
//         res.send(error);    
//     }
// }
// );


module.exports = router;