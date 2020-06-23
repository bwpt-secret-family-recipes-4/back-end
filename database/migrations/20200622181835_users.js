exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.varchar('name');
    tbl.varchar('email').unique();
    tbl.varchar('username', 500).notNullable().unique();
    tbl.varchar('password', 500).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
