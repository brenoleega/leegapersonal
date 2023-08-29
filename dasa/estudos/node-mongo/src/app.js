import express from "express";
import db from "./config/dbConnect.js";
import rotas from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão MongoDB Atlas"));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.");
});

const app = express();

app.use(express.json());

rotas(app);

export default app;
