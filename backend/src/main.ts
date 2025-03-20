import "reflect-metadata";
import Container, { Service } from "typedi";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AuthRouter } from "./domains/auth/router";

dotenv.config({ path: ".env" });
@Service()
export class Main {
  app: Application = express();
  port = process.env.PORT || 8000;

  constructor(private authRouter: AuthRouter) {
    this.addMiddlewares();
    this.addRoutes();
    this.addStatusRoute();
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server running on PORT ${this.port}`);
    });
  }

  private addMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private addRoutes() {
    this.app.use("/auth", this.authRouter.getRoutes());
  }
  private addStatusRoute() {
    this.app.get("/status", (req: Request, res: Response) => {
      res.send("App is running...");
    });
  }
}

Container.get(Main).startServer();
