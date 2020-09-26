require("dotenv").config;
const express = require("express");
const app = express();

var morgan = require("morgan");

const date = new Date();
const Number = require("./models/number");

app.use(express.static("build"));
app.use(express.json());
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
app.get("/info", async (request, response) => {
  const persons = await Number.estimatedDocumentCount();
  response.send(`<div>Phonebook has info for ${persons} people</div>
  <div>${date}</div>`);
});
app.get("/api/persons", (request, response) => {
  Number.find({}).then((numbers) => {
    response.json(numbers);
  });
});
app.get("/api/persons/:id", (request, response, next) => {
  Number.findById(request.params.id)
    .then((person) => {
      if (person) response.json(person);
      else response.status(404).end();
    })
    .catch((error) => {
      next(error);
    });
});
app.delete("/api/persons/:id", (request, response) => {
  Number.findByIdAndRemove(request.params.id)
    .then((result) => response.status(204).end())
    .catch((error) => next(error));
});
app.put("/api/persons/:id", (request, response, next) => {
  console.log(JSON.stringify(request.body));
  const number = request.body;
  Number.findByIdAndUpdate(request.params.id, number, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => response.json(updatedNote))
    .catch((error) => next(error));
});
app.post("/api/persons", (request, response, next) => {
  let number = request.body;
  // const oldPerson = await Number.findOne({ name: number.name });
  if (!number.name || !number.phoneNumber) {
    response.status(400).json({ error: "Name or number is missing" });
  } else {
    number = new Number(number);
    number
      .save()
      .then((savedNumber) => {
        console.log("Number saved");
        response.json(savedNumber);
      })
      .catch((error) => next(error));
  }
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.log(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "Malformatted id" });
  } else if ((error.name = "ValidationError")) {
    return response.status(400).send({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
