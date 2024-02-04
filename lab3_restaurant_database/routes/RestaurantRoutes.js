const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//Read ALL
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
  const restaurants = await restaurantModel.find({});
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

//http://localhost:3000/restaurants?sortBy=ASC
//http://localhost:3000/restaurants?sortBy=DESC
app.get('/restaurants', async (req, res) => {
    try {
        const { sortBy } = req.query.sortBy;
        let sortOption = 1; // Default to ascending order
        
        if (sortBy && sortBy.toUpperCase() === 'DESC') {
            sortOption = -1; // Change to descending order if requested
        } else if (sortBy && sortBy.toUpperCase() !== 'ASC') {
            return res.status(400).json({ error: 'Invalid sort parameter. Use "ASC" or "DESC".' });
        }
        
        const restaurants = await restaurantModel.find({}).sort({ "restaurant_id" : sortOption });
        
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Create New Restaurant
//http://localhost:3000/restaurants
app.post('/restaurants', async (req, res) => {
  try {
      const restaurant = new restaurantModel(req.body);
      await restaurant.save();
      res.status(201).json({ message: 'Restaurant has been saved', restaurant });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


  //Read By cuisine
//http://localhost:8081/restaurant/cuisines
app.get('/restaurants/cuisines/:cuisine', async (req, res) => {
  try {
      const cuisine = req.params.cuisine;
      const restaurants = await restaurantModel.find({ cuisines: cuisine });

      if (restaurants.length === 0) {
          return res.status(404).json({ message: 'No restaurants found for the specified cuisine.' });
      }

      res.json(restaurants);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/restaurants/:cuisines', async (req, res) => {
  try {
      const cuisines = req.params.cuisines;
      const restaurants = await restaurantModel.find({ cuisines: cuisines, city: { $ne: 'Brooklyn' } }, { _id: 0, cuisines: 1, name: 1, city: 1 }).sort({ name: 1 });
      res.json(restaurants);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

//Test INFO
// [
//   {
//       "_id": "65bf3cf290a863760ed1a2a7",
//       "restaurant_id": "1",
//       "name": "Sushi Star",
//       "city": "Kitchener",
//       "cuisines": [
//           "Japanese"
//       ],
//       "__v": 0
//   },
//   {
//       "_id": "65bf3d0890a863760ed1a2a9",
//       "restaurant_id": "2",
//       "name": "KFC",
//       "city": "Toronto",
//       "cuisines": [
//           "American"
//       ],
//       "__v": 0
//   },
//   {
//       "_id": "65bf3d1c90a863760ed1a2ab",
//       "restaurant_id": "3",
//       "name": "Lili's",
//       "city": "Toronto",
//       "cuisines": [
//           "Bakery"
//       ],
//       "__v": 0
//   },
//   {
//       "_id": "65bf3d4090a863760ed1a2ad",
//       "restaurant_id": "4",
//       "name": "East Side Mario's",
//       "city": "Toronto",
//       "cuisines": [
//           "Italian",
//           "American"
//       ],
//       "__v": 0
//   },
//   {
//       "_id": "65bf40b82e631dd83c0cf6f8",
//       "restaurant_id": "5",
//       "name": "McDonalds",
//       "city": "Canada",
//       "cuisines": [
//           "American"
//       ],
//       "__v": 0
//   }
// ]

module.exports = app