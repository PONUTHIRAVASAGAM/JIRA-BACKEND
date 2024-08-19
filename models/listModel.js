const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/test');

// Define the Lists model
const List = sequelize.define('List', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  list_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order_no: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
}, {
  // Additional model options
  tableName: 'Lists', // The actual table name in the database
  timestamps: false, // Disables the default `createdAt` and `updatedAt` fields
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('Lists table created successfully!');
  })
  .catch((err) => {
    console.error('Unable to create table:', err);
  });

module.exports = List;
