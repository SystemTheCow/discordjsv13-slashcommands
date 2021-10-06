const interactions = require('../base/commands.js')
const time = 1000*3 // 3 segundos
module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`Iniciado como ${client.user.username}`);
        let status = [[{name: 'Discord', type: 'PLAYING'}], [{name: 'Minecraft', type: 'WATCHING'}], [{name: 'LOL', type: 'WATCHING'}]]
        setInterval(() => {
            function randomStatus() {
                let rstatus = status[Math.floor(Math.random() * status.length)];
                client.user.setPresence({ activities: rstatus, status: 'online' });
            }
            randomStatus();
        }, time)
        client.guilds.cache.forEach(async guild => {
            await client.application?.commands.set([], guild.id).then(end =>{}).catch(e =>{console.log(e)})
            await client.application?.commands.set(interactions, guild.id).then(end =>{}).catch(e =>{console.log(e)})
        })
    },
};
