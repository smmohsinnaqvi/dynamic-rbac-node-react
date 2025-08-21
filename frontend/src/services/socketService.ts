// src/services/socketService.ts
import { io, Socket } from "socket.io-client";

class SocketService {
  private socket: Socket | null = null;

  connect() {
    if (!this.socket) {
      this.socket = io(
        process.env.REACT_APP_SOCKET_URL || "http://localhost:9000",
        {
          withCredentials: true,
        }
      );
    }
    return this.socket;
  }

  emit(event: string, data: any) {
    this.connect().emit(event, data);
  }

  on(event: string, handler: (data: any) => void) {
    this.connect().on(event, handler);
  }

  off(event: string, handler: (data: any) => void) {
    this.connect().off(event, handler);
  }
}

export const socketService = new SocketService();
