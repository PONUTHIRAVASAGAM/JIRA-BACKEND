const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const findUserByEmail = async (email) => {
  // console.log("=============email",email);
  return await User.findOne({  where: { email } });
  // const user = User.findOne({ where: { email }  });
  // console.log("=============user",user);
  // return await User.findOne({ email });
};

// Function to find a user by email and password
const findUserByEmailAndPassword = async (email, password) => {
  try {
    // Retrieve the user with the given email
    const user = await User.findOne({
      where: { email, password }
    });

    // Return the user if found, otherwise return null
    return user;
  } catch (error) {
    console.error('Error finding user by email and password:', error);
    throw new Error('Database query failed');
  }
};


module.exports = {
  createUser,
  findUserByEmail,
  findUserByEmailAndPassword
};
