import express from "express";
import http from "http";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
const server = http.createServer(app);
const connectHandler = () => {
  console.log(`Listening on http://localhost:3000`);
};
server.listen(3000, connectHandler);
