
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'sudar', email: 'sudarmani@gmail.com', password: ""},
        {id: 2, name: 'nandhu', email: 'nandhakumar@gmail.com', password: ""},
        {id: 3, name: 'mohan', email: 'mohan@gmail.com', password: ""}
      ]);
    });
};
