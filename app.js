import express from "express";
import http from "http";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("hi");
});
