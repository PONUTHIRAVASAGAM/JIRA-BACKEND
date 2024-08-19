const List = require('../models/listModel');

const createList = async (listData) => {
  return await List.create(listData);
};

const findListsByUserId = async (user_id) => {
  return await List.findAll({ where: { user_id } });
};

const updateList = async (id, listData) => {
  const list = await List.findByPk(id);
  if (!list) {
    return null;
  }
  return await list.update(listData);
};

const deleteList = async (id) => {
  const list = await List.findByPk(id);
  if (!list) {
    return null;
  }
  await list.destroy();
  return true;
};

module.exports = {
  createList,
  findListsByUserId,
  updateList,
  deleteList,
};
