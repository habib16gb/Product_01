import express from "express";
import colors from "colors";
import { config } from "dotenv";
import path from "path";
import router from "./routes/route.js";
import errors from "./middleware/error.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");

app.use(express.static("static"));

app.use("/", router);

app.use(errors.pageNotFound);

app.listen(PORT, () =>
  console.log(
    `Server started on ${process.env.NODE_ENV} mode in http://localhost:${PORT}`
      .bgGreen.bold
  )
);
