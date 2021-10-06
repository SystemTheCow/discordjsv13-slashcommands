const { Client, Intents, Collection, MessageEmbed, Util } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents: 32767,
});
const { token } = require(`${__dirname}/src/public/botconfig.json`);
const { slash } = require(`${__dirname}/src/utils/handler/slash.js`);
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);
slash(fs, client, Collection)
eventos(fs, client, MessageEmbed, Util)


client.login(token);
