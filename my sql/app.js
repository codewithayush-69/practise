import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4112",
});

console.log("connected successfully");

// await db.execute('create database mysql_db');
// console.log(await db.execute('show databases'));

// using database

await db.query("USE mysql_db");

//Creating table

// await db.query(`
// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
// `);

// console.log("table created");

//Insert data

// const data = [
//   ["PriyaSharma", "priya.sharma@example.com"],
//   ["RahulVerma", "rahul.verma@example.com"],
//   ["AnjaliSingh", "anjali.singh@example.com"],
//   ["VikramKumaar", "vikram.kumaar@example.com"],
//   ["SnehaJain", "sneha.jain@example.com"],
//   ["ArjunMehra", "arjun.mehra@example.com"],
//   ["KavitaReddy", "kavita.reddy@example.com"],
//   ["RohitGupta", "rohit.gupta@example.com"],
//   ["DeepaPatel", "deepa.patel@example.com"],
//   ["SanjayYadav", "sanjay.yadav@example.com"],
// ];

// await db.query("insert into users (username, email) values ?", [data]);

//Read

// console.log(rows);

//Update

// try {
//   await db.execute("update users set username=? where email=? ", [
//     "Ayush maurya",
//     "rahul.verma@example.com",
//   ]);

//   console.log(rows);
// } catch (error) {
//   console.error(error);
// }

//Delete

// try {
//   await db.execute("delete from users where email = ? ", ["sanjay.yadav@example.com"]);
//   const [rows] = await db.execute("select * from users");

//   console.log(rows);
// } catch (error) {
//   console.error(error);
// }
