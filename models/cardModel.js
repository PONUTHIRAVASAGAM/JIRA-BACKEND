const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/test');

// Define the Card model
const Card = sequelize.define('Card', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  card_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  list_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order_no: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Disables automatic timestamps (createdAt, updatedAt)
  tableName: 'Cards',
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('Cards table created successfully!');
  })
  .catch((err) => {
    console.error('Unable to create table:', err);
  });

module.exports = Card;
