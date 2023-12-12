const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/biblioteca")
    .then(() => {
        console.log("DB connection has been succesful");
    })
    .catch((err) => {
        console.log(`DB connection error: ${err}`);
    });
/*
mongoose.connect("mongodb://localhost:27017/biblioteca" , {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
*/

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: "libros" });

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;