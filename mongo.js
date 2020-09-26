const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("give password,name and number as argument");
  process.exit(1);
}
const password = process.argv[2];
const url = `mongodb+srv://linhtetswe:${password}@project0.6qcuv.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const numberSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
});

const Number = mongoose.model("Number", numberSchema);

const number = new Number({
  name: process.argv[3],
  phoneNumber: process.argv[4],
});
// number.save().then((result) => {
//   console.log(
//     `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
//   );
//   mongoose.connection.close();
// });
Number.find({}).then((persons) => {
  console.log("phonebook:");
  persons.forEach((person) =>
    console.log(`${person._id} ${person.name} ${person.phoneNumber}`)
  );
  mongoose.connection.close();
});
