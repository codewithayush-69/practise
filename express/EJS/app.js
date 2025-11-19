import express from "express";

const app = express();

app.set("view engine", "ejs");

const students = [
  {
    name: "Aarav",
    age: 18,
    favouriteSubjects: [
      { subject: "Math", level: "Advanced" },
      { subject: "Physics", level: "Intermediate" },
    ],
  },
  {
    name: "Ishita",
    age: 19,
    favouriteSubjects: [
      { subject: "Biology", level: "Advanced" },
      { subject: "Chemistry", level: "Beginner" },
    ],
  },
  {
    name: "Kunal",
    age: 20,
    favouriteSubjects: [
      { subject: "Computer Science", level: "Advanced" },
      { subject: "Math", level: "Intermediate" },
    ],
  },
  {
    name: "Meera",
    age: 17,
    favouriteSubjects: [
      { subject: "English", level: "Advanced" },
      { subject: "History", level: "Intermediate" },
    ],
  },
  {
    name: "Rohan",
    age: 21,
    favouriteSubjects: [
      { subject: "Economics", level: "Advanced" },
      { subject: "Political Science", level: "Intermediate" },
    ],
  },
  {
    name: "Simran",
    age: 18,
    favouriteSubjects: [
      { subject: "Art", level: "Beginner" },
      { subject: "Psychology", level: "Advanced" },
    ],
  },
];

app.get("/", (req, res) => {
  res.render("index", {students});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
