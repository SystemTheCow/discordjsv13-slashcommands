const { MessageButton, MessageActionRow} = require('discord.js');
module.exports = {
  name: "prueba",
  async execute(client, interaction, options, user, member, guild, channel) {
    interaction.reply({content: `XD`, ephemeral: true})
  },
};