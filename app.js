const express = require("express"); // importo express

const app = express();
app.use(express.json());

// importo ruter y handler

const librosRouter = require("./routes/libros");

const errorHandler = require("./middleware/errorHandler");

app.use("/libros", librosRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("hola, mundo")
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor iniciado en el puerto ${PUERTO}`);
});