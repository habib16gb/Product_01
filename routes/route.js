import express from "express";
import pageControle from "../controllers/pages.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).render("index", { title: "index page" });
});

const pages = [
  "dashboard",
  "customers",
  "orders",
  "message",
  "help",
  "settings",
  "password",
  "signout",
];

pages.forEach((page) => router.get(`/${page}`, pageControle.showPage));

export default router;
