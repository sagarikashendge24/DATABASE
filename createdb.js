
// TO OPEN MYSQL SHELL:
// sudo mysql -u root -p


// CREATING DATABASE:

// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Nav@gur1"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("DROP DATABASE mona", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });




// CREATING TABLE:


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Nav@gur1",
//   database: "mydbase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });





// from random import randint
// const s = require("readline-sync")
// function win(){
//         console.log("you win!")
// }

// function lose(){
//     console.log("you loss!")
// }
// function gammer() {
    
//     // player_choice.strip()
//     // var random_moves= 
//     var moves=["rock","paper","scissors"]
//     var player_choice=s.question("what do you pick?(rock,paper,scissors)")
//     var computer_choice=moves[Math.floor(Math.random()*moves.length)]
//     console.log(computer_choice)
    
//     if (player_choice==computer_choice){
//         console.log("DRAW")}
//     else if (player_choice=="rock" && computer_choice=="scissors"){
//         win()}
//     else if (player_choice=="rock" && computer_choice=="paper"){
//         lose()}    
//     else if (player_choice=="paper" && computer_choice=="scissors"){
//         lose()}
//     else if (player_choice=="scissors" && computer_choice=="paper"){
//         win()}
//     else if (player_choice=="scissors" && computer_choice=="rock"){
//         lose()}
//     else if (player_choice=="paper" && computer_choice=="rock"){
//         win()}
    // var again=s.question("do you want play again? (y or no").strip()
    // if (again=="n"){
    //     break
    // }
//     var play_again = s.question(`you wants to play again (yes or no):-`)
//     if(play_again=="yes"){
//        // case play_again=="yes":
//         gammer()}
            

// }  
// gammer()
