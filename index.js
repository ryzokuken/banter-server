const irc = require("irc");
const express = require("express");

const app = express();
const client = new irc.Client("chat.freenode.net", "kuken", {
  channels: ["#javascript", "#python", "#node.js", "#linux"],
});

let messages = [];
client.addListener("raw", message => {
  messages.push(message);
});

app.get("/", (req, res) => res.json(messages));
app.listen(3000, () => console.log("Listening on port 3000!"));
