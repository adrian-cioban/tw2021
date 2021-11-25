const express = require("express");
const Book = require("./Book");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

bookRouter
  .route("/books")
  .get((req, res) => {
    let filteredBooks = [];
    if (req.query.genre) {
      filteredBooks = books.filter((x) => x.genre == req.query.genre);
    } else {
      filteredBooks = books;
    }
    res.json(filteredBooks);
  })
  .post((req, res) => {
    let newBook = new Book(
      req.body.id,
      req.body.name,
      req.body.genre,
      req.body.author
    );
    books.push(newBook);
    console.log(books);
    return res.json(newBook);
  });

bookRouter.route("/books/:bookId").put((req, res) => {
  bookModif = books.filter((x) => x.id == req.params.bookId);
  bookModif.name = req.body.name;
  bookModif.genre = req.body.genre;
  bookModif.author = req.body.author;
  return res.json(bookModif);
});

app.get("/books2", (req, res) => {
  let orderedBooks = books.sort((a, b) => {
    let name1 = a.name.toLowerCase(),
      name2 = b.name.toLowerCase();
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  });
  res.json(orderedBooks);
});

app.post("/addBooks2", (req, res) => {
  if (typeof req.body.id == "number") {
    if (
      typeof req.body.name == "string" &&
      typeof req.body.genre == "string" &&
      typeof req.body.author == "string"
    ) {
      let newBook = new Book(
        req.body.id,
        req.body.name,
        req.body.genre,
        req.body.author
      );
      books.push(newBook);
      return res.json(newBook);
    }
  } else {
    console.log("Invalid book");
  }
});

app.delete("/deleteBooks", (req, res) => {
  books = [];
  res.status(200);
  res.send(books);
});
