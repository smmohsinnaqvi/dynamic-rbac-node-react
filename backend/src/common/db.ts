import { Service } from "typedi";
import { connect } from "mongoose";
@Service()
export class DBConnection {
  constructor() {}

  async startConnection() {
    await connect("mongodb://127.0.0.1:27017/OrangeFarm")
      .then(() => [console.info(`Database Connection Established`)])
      .catch(() => {
        console.error(`Database Connection Failed`);
      });
  }
}
