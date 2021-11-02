let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

const array = [
  { id: 1, name: "Ionut", age: 25 },
  { id: 2, name: "Alex", age: 18 },
  { id: 3, name: "Mihai", age: 13 },
  { id: 4, name: "Marcel", age: 12 },
  { id: 5, name: "Marius", age: 22 },
];

router.route("/student/:id").get((req, res) => {
  const id = Number(req.params.id);
  const selectedStudent = array.find((student) => student.id === id);
  res.json(selectedStudent);
});

let port = 8000;
app.listen(port);

console.log("API is running");
