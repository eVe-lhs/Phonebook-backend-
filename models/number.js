require("dotenv").config();
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const url = process.env.MONGODB_URI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("error connecting to database:", error);
  });

const numberSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  phoneNumber: {
    type: String,
    minlength: 8,
    required: true,
  },
});
numberSchema.set("toJSON", {
  transform: (document, object) => {
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});
numberSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Number", numberSchema);
