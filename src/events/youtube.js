const { getChannelVideos } = require('yt-channel-info')
const db = require('quick.db')

const ID = 'UC0gQFgYOu7AMyhKNSYdBj9Q'
const tiempo = 2
const canal = '879556304312627282'
module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log('Verificador de videos iniciado')
        let latest = await db.get('latest')
        let channel = await client.channels.fetch(canal, true, true)
        setInterval(async function(){
            let response = await getChannelVideos(ID, 0)
            latest = await db.get('latest')
            if(response.items[0].title == latest) return 
            db.set('latest', response.items[0].title)
            let data = response.items[0]
            return channel.send({content: `@everyone, System32 ha subido un video:\n ${data.title}`})
            }, tiempo*1000)
    },
};