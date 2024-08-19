const Card = require('../models/cardModel');

const createCard = async (cardData) => {
  return await Card.create(cardData);
};

// const getCardsByUserId = async (user_id) => {
  // console.log("=====userId=====",user_id);  
  // return await Card.findAll({ where: { user_id: user_id } });
// };


const getCardsByListId = async (list_id) => {
  // console.log("=====Id=====",list_id); 
  return await Card.findAll({ where: { list_id: list_id } });
};

const updateCard = async (cardId, cardData) => {
  // console.log("=====cardId=====",cardId);  
  // console.log("=====cardData=====",cardData);  
  return await Card.update(cardData, { where: { id: cardId } });
};

const deleteCard = async (cardId) => {
  return await Card.destroy({ where: { id: cardId } });
};

const deleteCardByListId = async (list_id) => {
  return await Card.destroy({ where: { list_id: list_id } });
};

module.exports = {
  createCard,
  // getCardsByUserId,
  deleteCardByListId,
  getCardsByListId,
  updateCard,
  deleteCard,
};
