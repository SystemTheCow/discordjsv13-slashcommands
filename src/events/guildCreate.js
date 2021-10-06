const interactions = require('../base/commands.js')
module.exports = {
	name: 'guildCreate', 
	async execute(guild, client) {
            client.application?.commands.set(interactions, guild.id).catch(e => {})
	},
};