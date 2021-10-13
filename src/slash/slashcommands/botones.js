const { MessageButton, MessageActionRow} = require('discord.js');
module.exports = {
  name: "botones",
  async execute(client, interaction, options, user, member, guild, channel) {
    const boton = new MessageButton()
    .setCustomId('prueba')
    .setLabel('Hola')
    .setStyle('PRIMARY')
    const row = new MessageActionRow()
    .addComponents(boton)
    interaction.reply({content: `Hola`, components: [row], ephemeral: true})
  },
};