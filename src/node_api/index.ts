import express, { Request, Response } from "express";
import { get } from "env-var";


const app = express();

const port = Number(process.env.PORT) || 8080;

async function initServer() {
  app.listen(port, '0.0.0.0');
  console.log("Server listen on http://localhost:" + port);
}

async function main() {
  await initServer();

  app.get('/', (_req: Request, res: Response) => {
    res.status(200);
    res.send("Welcome to the workshop!")
  });
}

main()
  .catch((e) => console.error(e));
