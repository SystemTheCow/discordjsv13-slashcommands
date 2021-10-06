module.exports = {
    name: "avatar",
    async execute(client, interaction, options, user, member, guild, channel) {
      let message = await channel.messages.fetch(options[0])
      interaction.reply({content: `Hola! ${message.author.id}, respondo a tu mensaje de ${message.content}, ${message.author.displayAvatarURL()}`, ephemeral: true})
    },
  };
  