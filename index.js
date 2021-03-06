const irc = require("irc");

const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);

const client = new irc.Client("chat.freenode.net", "kuken", {
  channels: ["#javascript", "#python", "#node.js", "#linux"],
});

let messages = [];
client.addListener("raw", message => {
  messages.push(message);
});

io.on("connection", socket => {
  console.log("Someone connected!");
});

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.get("/", (req, res) => res.json(messages));

http.listen(3000, () => console.log("Listening on port 3000!"));
