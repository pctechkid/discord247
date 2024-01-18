const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris("MzAxNzIxODUwNDk1MzY5MjE5.G97BTw.bv8WrRNgg7BZpPIROkQM5f6O46ybTAM73EedGo");

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
