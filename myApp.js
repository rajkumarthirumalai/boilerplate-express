let express = require('express');
let app = express();
console.log("Hello World");
// app.get("/", (req, res) => res.send("Hello Express"))

console.log(__dirname + "/views/index.html");
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"))



































module.exports = app;
