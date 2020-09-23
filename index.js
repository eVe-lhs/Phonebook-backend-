const express = require("express");
const app = express();
const cors = require("cors");
var morgan = require("morgan");
var persons = [
  { id: 1, name: "Arto Hellas", number: "2345678" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Marry Poppendick", number: "39-23-6423122" },
];
const date = new Date();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));
morgan.token("newObject", function (req, res) {
  if (req.method !== "POST") {
    return null;
  } else {
    return JSON.stringify(req.body);
  }
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :newObject"
  )
);
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/api/persons/:id", (request, response) => {
  const person = persons.find(
    (person) => person.id === Number(request.params.id)
  );
  if (person) response.json(person);
  else response.status(400).send("There is no person with this id");
});
app.delete("/api/persons/:id", (request, response) => {
  persons.pop((person) => person.id === Number(request.params.id));
  response.status(204).end();
});
app.post("/api/persons", (request, response) => {
  const number = request.body;
  number.id = Math.floor(Math.random() * 100);
  if (!number.name || !number.number) {
    response.status(400).json({ error: "Name or number is missing" });
  } else if (persons.find((person) => person.name === number.name)) {
    response.status(400).json({ error: "names must be unique" });
  } else {
    persons.push(number);
    response.send(number);
  }
});
app.get("/info", (request, response) => {
  response.send(`<div>Phonebook has info for ${persons.length} people</div>
  <div>${date}</div>`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
