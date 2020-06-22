exports.seed = function (knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'Priya.Vaidya', password: 'password' },
        { id: 2, username: 'Kenneth.Brandon', password: 'password' },
        { id: 3, username: 'Ryan.Paulson', password: 'password' },
        { id: 4, username: 'Doug.Little', password: 'password' },
        { id: 5, username: 'Nasha.Gladney', password: 'password' },
        { id: 6, username: 'Allison.Castaneda', password: 'password' },
      ]);
    });
};
