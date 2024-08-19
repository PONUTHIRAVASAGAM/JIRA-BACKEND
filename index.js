// index.js
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');



const app = express();
const port = 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/cards', cardRoutes);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
