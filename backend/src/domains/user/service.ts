import { Service } from "typedi";

// Mock Database (Replace with actual DB logic)
const users: { id: string; email: string; password: string }[] = [];

@Service()
export class UserService {
  async findByEmail(email: string) {
    return users.find((user) => user.email === email);
  }

  async createUser(email: string, password: string) {
    const newUser = { id: Date.now().toString(), email, password };
    users.push(newUser);
    return newUser;
  }

  async updatePassword(userId: string, newPassword: string) {
    const user = users.find((u) => u.id === userId);
    if (user) {
      user.password = newPassword;
    }
  }
}
