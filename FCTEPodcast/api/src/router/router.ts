import express from "express";
import aluno_router from "./aluno/aluno_router";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

router.use("/aluno", aluno_router);

export default router;