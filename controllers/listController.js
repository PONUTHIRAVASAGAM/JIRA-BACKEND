const listRepository = require('../repositories/listRepository');

// Create a new list
const createList = async (req, res) => {
  try {
    const { list_name, user_id, order_no } = req.body;

    // Create a new list in the database
    const list = await listRepository.createList({
      list_name,
      user_id,
      order_no,
      created_date: new Date(),
      updated_date: new Date(),
    });

    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all lists for a specific user
const getListsByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Fetch lists from the database based on the user ID
    const lists = await listRepository.findListsByUserId(user_id);

    if (!lists || lists.length === 0) {
      return res.status(404).json({ message: 'No lists found for this user' });
    }

    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an existing list
const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { list_name, order_no } = req.body;

    // Update the list in the database
    const updatedList = await listRepository.updateList(id, {
      list_name,
      order_no,
      updated_date: new Date(),
    });

    if (!updatedList) {
      return res.status(404).json({ message: 'List not found' });
    }

    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a list
const deleteList = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the list from the database
    const deleted = await listRepository.deleteList(id);

    if (!deleted) {
      return res.status(404).json({ message: 'List not found' });
    }

    res.status(200).json({ message: 'List deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createList,
  getListsByUserId,
  updateList,
  deleteList,
};
