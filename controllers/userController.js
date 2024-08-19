const userRepository = require('../repositories/userRepository');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log("=============email",email);
    const existingUser = await userRepository.findUserByEmail(email);
    // console.log("=============User",existingUser);
    

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await userRepository.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const authenticateUser = async (req, res) => {
  // console.log("===========req",req.body);
  
  try {
    const { email, password } = req.body;

    const user = await userRepository.findUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Authentication successful', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = {
  registerUser,
  authenticateUser,
};
