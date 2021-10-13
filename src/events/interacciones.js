module.exports = {
	name: 'interactionCreate', 
	async execute(interaction, client) {
        let options = []
        if (!interaction.isButton()) interaction.options.data.forEach(data => options.push(data.value))
        let user = interaction.user
        let member = interaction.member
        let guild = interaction.member.guild
        let channel = interaction.channel
        if(interaction.isCommand()){
            if(client.slash.has(interaction.commandName)){
                const command = client.slash.get(interaction.commandName);
                
                try{
                    command.execute(client, interaction, options, user, member, guild, channel)
                }catch(e){console.log(e)}
            }else{
                return interaction.reply({content: `No se ha encontrado este comando en mi lista, quizá fue removido`, ephemeral: true})
            }
        }else if(interaction.isContextMenu()){
            if(client.slash.has(interaction.commandName)){
                const command = client.slash.get(interaction.commandName);
                
                try{
                    command.execute(client, interaction, options, user, member, guild, channel)
                }catch(e){console.log(e)}
            }else{
                return interaction.reply({content: `No se ha encontrado este comando en mi lista, quizá fue removido`, ephemeral: true})
            }
        }else if(interaction.isButton()){
            if(client.botones.has(interaction.customId)){
                const command = client.botones.get(interaction.customId);
                try{
                    command.execute(client, interaction, options, user, member, guild, channel)
                }catch(e){console.log(e)}
            }else{
                return interaction.reply({content: `No se ha encontrado este botón en mi lista, quizá fue removido`, ephemeral: true})
            }
        }
        
    }
}