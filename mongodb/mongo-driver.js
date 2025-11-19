import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();

const db = client.db("data-nodejs");
const student = db.collection("user");

// student.insertMany([
//   { id: 1, name: "Aarav Sharma", age: 14, class: "9A", grade: "A" },
//   { id: 2, name: "Ishita Verma", age: 15, class: "10B", grade: "B" },
//   { id: 3, name: "Rohan Gupta", age: 13, class: "8C", grade: "A+" },
//   { id: 4, name: "Priya Singh", age: 14, class: "9B", grade: "A" },
//   { id: 5, name: "Aditya Mishra", age: 16, class: "11A", grade: "B+" },
//   { id: 6, name: "Neha Yadav", age: 15, class: "10A", grade: "A-" },
//   { id: 7, name: "Karan Mehta", age: 17, class: "12C", grade: "B" },
//   { id: 8, name: "Simran Kaur", age: 14, class: "9C", grade: "A+" },
//   { id: 9, name: "Rahul Nair", age: 13, class: "8A", grade: "B" },
//   { id: 10, name: "Ananya Roy", age: 15, class: "10C", grade: "A" },
//   { id: 11, name: "Vikram Patel", age: 16, class: "11B", grade: "B+" },
//   { id: 12, name: "Meera Das", age: 14, class: "9A", grade: "A-" },
//   { id: 13, name: "Siddharth Jain", age: 17, class: "12A", grade: "A" },
// ]);

// const cursour = await student.find().toArray();
// console.log(cursour);

// update

// await student.updateOne({name: "Aarav Sharma"}, {$set:{age: 25}});

// delete

// await student.deleteOne({name: "Aarav Sharma"});