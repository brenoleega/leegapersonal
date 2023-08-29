import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutor)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .get("/autores/:id", AutorController.getAutorPorId)
    .delete("/autores/:id", AutorController.excluirAutor);
export default router;
