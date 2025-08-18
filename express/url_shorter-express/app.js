import express from "express";
import { shortnerRouter } from "./routes/shortnerURL.routes.js";

const app = express();

app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

app.use(shortnerRouter);

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`server running at : http://localhost:${port}`);
});
