import express from "express";
import { register_aluno } from "../../services/aluno/auth/register/register_aluno";

const aluno_router = express.Router();

aluno_router.get("/", (req, res) => {
  res.send("Rota de Aluno");
});

// AUTH
aluno_router.post("/register", register_aluno);

export default aluno_router;