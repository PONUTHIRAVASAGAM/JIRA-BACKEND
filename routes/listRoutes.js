const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Route to create a new list
router.post('/addLists', listController.createList);

// Route to get all lists for a specific user by user_id
router.get('/viewLists/user/:user_id', listController.getListsByUserId);

// Route to update an existing list by list ID
router.put('/updateLists/:id', listController.updateList);

// Route to delete a list by list ID
router.delete('/deleteLists/:id', listController.deleteList);

module.exports = router;
