const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://dbuser:VNGcdYVMGXdLQz0a@cluster0.wihv2ix.mongodb.net/comp3133?retryWrites=true&w=majority", {
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });