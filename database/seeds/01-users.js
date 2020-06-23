exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { username: 'Priya.Vaidya', password: 'password' },
        { username: 'Kenneth.Brandon', password: 'password' },
        { username: 'Ryan.Paulson', password: 'password' },
        { username: 'Doug.Little', password: 'password' },
        { username: 'Nasha.Gladney', password: 'password' },
        { username: 'Allison.Castaneda', password: 'password' },
      ]);
    });
};
