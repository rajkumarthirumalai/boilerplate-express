require('dotenv').config()
let express = require('express');
let path = require('path');
let app = express();
console.log("Hello World");

app.use("/public", express.static(path.join(__dirname, "public")))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")))
app.get("/json", (req, res) => {
    console.log(process.env.MESSAGE_STYLE);
    process.env.MESSAGE_STYLE == "uppercase" ? res.json({ "message": "HELLO JSON" }) :
        res.json({ "message": "Hello json" })
})
app.get(
    "/now",
    (req, res, next) => { req.time = new Date().toString(); next(); },
    (req, res) => { console.log(req.time); res.json({ time: req.time }) }
)
app.get("/:word/echo", 
    (req, res, next) => {
    if (req.params.word) {
        req.word = req.params.word;
        next();
    }
    },
    (req,res) =>res.json({echo:req.word})
)



































module.exports = app;
