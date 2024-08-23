const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser.js');

const JWT_SECRET = "Harryisagood$boy";


//route 1 to create user
router.post('/createuser', [
    body('name', 'Enter valid name').isLength({ min: 3 }),
    body('email', 'Enter valid Email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() });
        }

        const email = await User.findOne({ email: req.body.email })
        if (email) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: secPass
        };


        const newUser = await User.create(user);
        const data = {
            user: {
                id: newUser.id,
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.json(authtoken);


        res.status(200).json(newUser); // Only send response here

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

//route 2

router.post('/login', [
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ errors: "Please try to login with correct credentials e" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ errors: "Please try to login with correct credentials p" });
        }
        const payload = {
            user: {
                id: user.id,
            }
        }
        const authtoken = jwt.sign(payload, JWT_SECRET);
        return res.json(authtoken);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//route 3

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});






module.exports = router;