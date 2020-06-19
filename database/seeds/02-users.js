exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'Priya.Vaidya', password: 'secretFamRecipes1' },
        { id: 2, username: 'Kenneth.Brandon', password: 'secretFamRecipes2' },
        { id: 3, username: 'Ryan.Paulson', password: 'secretFamRecipes3' },
        { id: 4, username: 'Doug.Little', password: 'secretFamRecipes4' },
        { id: 5, username: 'Nasha.Gladney', password: 'secretFamRecipes5' },
        { id: 6, username: 'Allison.Castaneda', password: 'secretFamRecipes6' },
      ]);
    });
};
