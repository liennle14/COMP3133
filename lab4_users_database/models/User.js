const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match : /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
            match: /^[a-zA-Z ]+$/
        },
        zipcode: {
            type: String,
            required: true,
            match: /^\d{5}-\d{4}$/
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: {
        type: String,
        required: true,
        match: /^1-\d{3}-\d{3}-\d{4}$/ 
    },
    website:{
        type: String,
        required: true,
        match: /^(http|https):\/\/[^ "]+$/
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
});

const User = mongoose.model('Users', userSchema);
module.exports = User;