import express from "express";
import router from "./routes/diffRoute.js";

const app = express();
app.use(express.json());

app.use("/api", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
