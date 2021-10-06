module.exports = {
  name: "interaccion",
  async execute(client, interaction, options, user, member, guild, channel) {
    channel.send('hola')
    interaction.reply({content: 'hola', ephemeral: true})
  },
};
