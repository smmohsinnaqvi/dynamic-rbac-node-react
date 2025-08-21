import "reflect-metadata";
import Container, { Service } from "typedi";
import express, { Application, Request, Response } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import { AuthRouter } from "./domains/auth/router";
import { DBConnection } from "./common/db";
import { RoleRouter } from "./domains/role/router";
import { ChatRouter } from "./domains/chat/chat.router";
import { initSocketServer } from "./domains/chat/socketServer";

dotenv.config({ path: ".env" });
@Service()
export class Main {
  app: Application = express();
  port = process.env.PORT || 8000;

  constructor(
    private authRouter: AuthRouter,
    private roleRouter: RoleRouter,
    private dbConnection: DBConnection,
    private chatRouter: ChatRouter
  ) {
    this.addMiddlewares();
    this.addRoutes();
    this.addStatusRoute();
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.info(`Server started at PORT ${this.port}`);
      this.dbConnection.startConnection();
    });
    initSocketServer();
  }

  private addMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
      })
    );
  }

  private addRoutes() {
    this.app.use("/auth", this.authRouter.getRoutes());
    this.app.use("/role", this.roleRouter.getRoutes());
    this.app.use("/chat", this.chatRouter.getRoutes());
  }
  private addStatusRoute() {
    this.app.get("/status", (req: Request, res: Response) => {
      res.send("App is running...");
    });
  }
}

Container.get(Main).startServer();
