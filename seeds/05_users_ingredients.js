
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_ingredients').insert([
        {user_id: 1, ingredient_id: 9},
        {user_id: 1, ingredient_id: 8},
        {user_id: 1, ingredient_id: 7},
        {user_id: 2, ingredient_id: 6},
        {user_id: 2, ingredient_id: 5},
        {user_id: 2, ingredient_id: 4},
        {user_id: 3, ingredient_id: 3},
        {user_id: 3, ingredient_id: 2},
        {user_id: 3, ingredient_id: 1}
      ]);
    });
};
