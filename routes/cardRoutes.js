const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Route to create a new card
router.post('/addCards', cardController.createCard);

// Route to get all cards for a specific list by user_id
router.get('/viewCards/list/:id', cardController.getCardsByListId);

// Route to get all cards for a specific list by user_id
// router.get('/viewCards/user/:id', cardController.getCardsByUserId);

// Route to update an existing card by card ID
router.put('/updateCards/:id', cardController.updateCard);

// Route to delete a card by card ID
router.delete('/deleteCards/:id', cardController.deleteCard);

router.delete('/deleteCardsByListId/:id', cardController.deleteCardByListId);


module.exports = router;
