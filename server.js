const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const User = require("./seeders/seed");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});