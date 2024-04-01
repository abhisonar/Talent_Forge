const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { readdirSync, statSync } = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Connect to MongoDB
const DB_URL = process.env.DATABASE_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define port
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log('Server is running on port: ', { PORT });
});

function registerRoutes(directory, prefix = '') {
  readdirSync(directory).forEach((item) => {
    const itemPath = `${directory}/${item}`;
    const itemStat = statSync(itemPath);

    if (itemStat.isDirectory()) {
      // If it's a directory, recursively call registerRoutes
      registerRoutes(itemPath, `${prefix}/${item}`);
    } else if (item.endsWith('.js') || item.endsWith('.ts')) {
      // If it's a JavaScript file, register it as a route
      app.use(`/api`, require(itemPath));
    }
  });
}

registerRoutes('./routes');

// route middlewares //// Dynamically include route files
// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r))); // read all the files from routes directory and use them as middlewares

// Root route
app.get('/api', (req, res) => {
  res.json({
    data: 'Hey you hit node api updated',
  });
});
