const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello world con express"));

app.listen(3000);
console.log("Servidor ejecutandose en el servidor 3000");
