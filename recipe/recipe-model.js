const db = require('../database/dbconfig.js');

module.exports = {
  getAllRecipes,
};

function getAllRecipes() {
  return db.select('*').from('recipes');
}
