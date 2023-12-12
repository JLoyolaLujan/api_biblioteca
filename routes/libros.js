// importo express
const express = require("express");

const librosRouter = express.Router();

const Libro = require("../models/Libros");

const errorHandler = require("../middleware/errorHandler");

/*
get /libros 
get /libros/:id 
post /libros --> 
put /libros/:id 
delete /libros/:id 
*/

// get - tomar libros (funciona)
librosRouter.get("/", async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        const handler = errorHandler(error);
        res.status(handler[0]).json(handler[1]);
    }
});

// get by id - tomar libro por id (funciona)

librosRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id; 
        //const libro = await Libro.filter((l) => l._id == id);
        // const libro = await db.getCollection("libros").find({_id: {type: String}});
        const libro = await Libro.findById(id);

        if (!libro) {
            const error = new Error("libro no encontrado");
            error.status = 404; 
            throw error; 
        }

        res.json(libro);
    } catch (error) {
        const handler = errorHandler(error);
        res.status(handler[0]).json(handler[1]);
    }
});

// postear (funciona)

librosRouter.post("/", async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body); 
        await nuevoLibro.save();
        res.json(nuevoLibro); 
    }
    catch (error) {
        const handler = errorHandler(error);
        res.status(handler[0]).json(handler[1]);
    }
});

// update - actualizar (funciona)

librosRouter.put("/:id", async (req, res) => {
     

    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(libro);
    } catch (error) {
        const handler = errorHandler(error);
        res.status(handler[0]).json(handler[1]);
    }
});

// eliminar (funciona)

librosRouter.delete("/:id", async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id); 
        res.json({ message: "libro eliminado correctamente" });
    } catch (error) {
        // res.status(500).json({error:"error"});
        const handler = errorHandler(error);
        res.status(handler[0]).json(handler[1]);
    }
});

module.exports = librosRouter;