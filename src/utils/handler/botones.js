module.exports.botones = function (fs, client, Collection) {
    client.botones = new Collection();
    const commandFolder = fs.readdirSync(__dirname + "/" + `../../botones`);
    for (const folder of commandFolder) {
      const commandFile = fs.readdirSync(__dirname + "/" + `../../botones/${folder}`);
      for (const file of commandFile) {
        const command = require(__dirname + "/" + `../../botones/${folder}/${file}`);
        client.botones.set(command.name, command);
      }
    }
  };