let knex = require('knex')
let db = require('./index')

let mysql = knex({
    client: 'mysql',
    connection: {
        ...db
    },
    pool: {min: 0, max: 10}
})

mysql.schema.hasTable('products').then(function (exists) {
  if (!exists) {
    return mysql.schema.createTable('products', (table) => {
      table.increments(); 
      table.text('title', 128).notNullable();
      table.string('description', 1000).notNullable();
      table.string('price', 1000).notNullable();
      table.string('thumbnail', 1000).notNullable();
    })
  }
})

module.exports = mysql

