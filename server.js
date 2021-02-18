const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/router.js")

const PORT = process.env.PORT || 3000;

const db = require("./public");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "https://git.heroku.com/mysterious-forest-26465.git", 
{ 
    useNewUrlParser: true ,
    useFindAndModify: false
});
app.use(apiRoutes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



