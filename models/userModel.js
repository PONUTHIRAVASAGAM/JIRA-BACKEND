const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/test');

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('User table created successfully!');
  })
  .catch((err) => {
    console.error('Unable to create table:', err);
  });

module.exports = User;
