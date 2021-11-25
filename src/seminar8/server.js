const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

var students = [
  {
    id: 1,
    name: "Andrei",
    age: 22,
    studyGroup: {
      name: "1081",
      year: 3,
    },
  },
  {
    id: 2,
    name: "Ioana",
    age: 22,
    studyGroup: {
      name: "1081",
      year: 3,
    },
  },
  {
    id: 3,
    name: "Alexandru",
    age: 22,
    studyGroup: {
      name: "1081",
      year: 3,
    },
  },
];

app.get("/", (request, response) => {
  response.send("Server works!");
});

app.get("/api/students", (req, res) => {
  res.status(200);
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  res.status(200);
  let student = students.filter((x) => x.id == req.params.id);
  res.send(student);
});

app.post("/api/students/add", (req, res) => {
  students.push(req.body);
  res.status(201);
  res.send(students);
});

app.put("/api/students/:id", (req, res) => {
  students = students.filter((x) => x.id != req.params.id);
  students.push(req.body);
  res.status(200);
  res.send(students);
});

app.delete("/api/students/delete/:id", (req, res) => {
  students = students.filter((x) => x.id != req.params.id);
  res.status(200);
  res.send(students);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
