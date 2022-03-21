const express = require("express")
const app = express();

//라우팅
const home = require("./src/routes/home");

//연결
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));


app.use("/", home);

module.exports = app;