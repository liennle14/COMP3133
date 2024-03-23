const express = require('express');
const User = require('../models/User');
const app = express();

app.get('/users', async (req, res) => {
    const user = await User.find({});
    try {
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app