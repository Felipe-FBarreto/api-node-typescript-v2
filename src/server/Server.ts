import express from "express";

const server = express();

server.get("/", (_, res) => {
  return res.send("Olá Dev , agora vamos ser backend");
});

export { server };
