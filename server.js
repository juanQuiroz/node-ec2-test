const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello world con express v2"));

app.listen(8080);
console.log("Servidor ejecutandose en el servidor 8080
