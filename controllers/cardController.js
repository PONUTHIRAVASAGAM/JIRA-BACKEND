const cardRepository = require('../repositories/cardRepository');

const createCard = async (req, res) => {
  try {
    const { card_name, description, list_id, user_id, order_no } = req.body;
    const card = await cardRepository.createCard({
      card_name,
      description,
      list_id,
      user_id,
      order_no,
      created_date: new Date(),
      updated_date: new Date(),
    });
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const getCardsByUserId = async (req, res) => {
  // try {
    // const user_id  = req.params.id;
    // console.log("=====req.params=====",req.params.id);    
    // const cards = await cardRepository.getCardsByUserId(user_id);
    // res.status(200).json(cards);
  // } catch (err) {
    // res.status(500).json({ message: err.message });
  // }
// };
// 
const getCardsByListId = async (req, res) => {
  try {
    const list_id  = req.params.id;
    // console.log("=====req.params=====",req.params.id);    
    const cards = await cardRepository.getCardsByListId(list_id);
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCard = async (req, res) => {
  console.log("=====Update Card Method Calling=====");  
  console.log("=====req.params=====",req);    
  try {
    const { id } = req.params;
    const { list_id } = req.body;
    const updatedCard = await cardRepository.updateCard(id, {
      list_id,
      // card_name,
      // description,
      // order_no,
      updated_date: new Date(),
    });
    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    await cardRepository.deleteCard(id);
    res.status(204).send(); // No content status for successful deletion
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCardByListId = async (req, res) => {
  console.log("=======List.req========",req);
  
  try {
    const { id } = req.params;
    await cardRepository.deleteCardByListId(id);
    res.status(204).send(); // No content status for successful deletion
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCard,
  // getCardsByUserId,
  deleteCardByListId,
  getCardsByListId,
  updateCard,
  deleteCard,
};
