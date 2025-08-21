import { Router, Request, Response } from "express";
import { Service, Inject } from "typedi";
import { ChatController } from "./chat.controller";

@Service()
export class ChatRouter {
  public router: Router;

  constructor(@Inject() private chatController: ChatController) {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    // List conversations for a user
    this.router.get(
      "/conversations/:userId",
      this.wrap(
        this.chatController.getUserConversations.bind(this.chatController)
      )
    );

    // Get messages for a conversation
    this.router.get(
      "/:conversationId/messages",
      this.wrap(
        this.chatController.getMessagesForConversation.bind(this.chatController)
      )
    );

    // Mark messages as read (REST fallback)
    this.router.post(
      "/:conversationId/read",
      this.wrap(this.chatController.markMessagesRead.bind(this.chatController))
    );
  }

  /** Error‑safe wrapper for async handlers */
  private wrap(
    fn: (req: Request, res: Response) => Promise<any>
  ): (req: Request, res: Response) => void {
    return (req, res) => {
      fn(req, res).catch((err) => {
        console.error("ChatRouter error: ", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
    };
  }

  public getRoutes(): Router {
    return this.router;
  }
}
