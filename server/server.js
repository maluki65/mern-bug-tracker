const app = require('./app');
const mongoose = require('mongoose');

const PORT = 4000;
mongoose.connect('mongodb://localhost:27017/bugtracker').then(() => {
  console.log('Connected to database');
  app.listen(PORT, () => 
  console.log(`Server running on ${PORT}`));
});