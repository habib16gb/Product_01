import express from "express";
import colors from "colors";
import { config } from "dotenv";
import path from "path";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.status(200).render("index", { title: "index page" });
});

app.get("/dashboard", (req, res) => {
  res.status(200).render("dashboard", { title: "dashboard page" });
});
app.get("/customers", (req, res) => {
  res.status(200).render("customers", { title: "customers page" });
});
app.get("/orders", (req, res) => {
  res.status(200).render("orders", { title: "orders page" });
});
app.get("/message", (req, res) => {
  res.status(200).render("message", { title: "message page" });
});
app.get("/help", (req, res) => {
  res.status(200).render("help", { title: "help page" });
});
app.get("/settings", (req, res) => {
  res.status(200).render("settings", { title: "settings page" });
});
app.get("/password", (req, res) => {
  res.status(200).render("password", { title: "password page" });
});
app.get("/signout", (req, res) => {
  res.status(200).render("signout", { title: "signout page" });
});

app.listen(PORT, () =>
  console.log(
    `Server started on ${process.env.NODE_ENV} mode in http://localhost:${PORT}`
      .bgGreen.bold
  )
);
