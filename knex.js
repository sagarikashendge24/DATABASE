
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Nav@gur1",
      database: "knex",
    },
  });

// function create_table() {
//         return knex.schema.createTable("users", function (t) {
//           t.increments("id").primary();
//           t.string("first_name", 100);
//           t.string("last_name", 100);
//         })
//         .then(()=>{console.log('Table created')})
//         .catch((err)=>{console.log(err)})
//   }
// create_table()  

// Insert data into the users table
// function insert_data() {
//     knex.schema.hasTable("users").then(function (exists) {
//         return knex("users").insert({
//           first_name: "sagariak",
//           last_name: "sdfhjukh",
//         });
//     })
//     .then(()=>{console.log('Table created')})
//     .catch((err)=>{console.log(err)})
//   }
// insert_data()

// Update users table by id
// function update_data(id) {
//     knex.schema.hasTable("users").then(function (exists) {
//         return knex("users")
//           .update({ first_name: "sagarika", last_name: "shendge" })
//           .where("id", id);
//     })
//     .then(()=>{console.log('Table created')})
//     .catch((err)=>{console.log(err)})
//   }
//   update_data(1) 

// Delete users data by id
// function delete_by_id(id) {
//     knex.schema.hasTable("users").then(function (exists) {
//         return knex("users").where("id", id).del();
//     });
//   }
// delete_by_id(5)  
  


