const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.json());

const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/'), (req, res) => {
     res.send("Olá mundo!");
}

const livroRoutes = require("./src/routes/frase.routes");

app.use("/api/v1/frases", livroRoutes)

app.listen(port, () => {
    console.log(`O servidor está executando na porta: ${port}`);
});