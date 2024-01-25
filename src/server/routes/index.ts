import { StatusCodes } from "http-status-codes";
import { Router } from "express";

const router = Router();

router.get("/auth", (_, res) => {
  return res.send("Olá Dev , agora vamos ser backend");
});
router.post("/teste", (req, res) => {
  return res.json(req.body);
});
router.post("/teste/:id", (req, res) => {
  return res.json(req.params);
});

router.post("/query", (req, res) => {
  console.log(req.query);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.query);
});

export { router };
