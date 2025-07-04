const express = require('express');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

module.exports = app;