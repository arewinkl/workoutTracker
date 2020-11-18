const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

//const User = require("./seeders/seed");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static("models"));

app.use(express.static("public"));

//path for connection updated for the necessary db
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


//! these routes do not work and wont work
//!app.use(require("./routes/apiRoutes"));
//!app.use(require("./routes/htmlRoutes"));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
