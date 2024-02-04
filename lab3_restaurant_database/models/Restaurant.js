const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: [true, "Please enter restaurant_id"],
    },
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    city:{
        type: String,
        required: [true, "Please enter city"]
    },
    cuisines: {
        type: [String],
        required: [true, "Please Enter Cuisines"]
    
    },
});


const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;