const irc = require("irc");

const client = new irc.Client("chat.freenode.net", "kuken", {
  channels: ["#javascript", "#python", "#node.js", "#linux"],
});

client.addListener("raw", message => {
  console.log(message);
});
