function handler(m) {
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `๐งก *Eso son los contactos para ti.*\n๐ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/gata_dios', '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ | ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ', '.infobot'],
['โ ๐๐ง ๐๐ก ๐๐ฃ๐๐๐๐ค | ๐๐ค ๐ฉ๐ค ๐จ๐ฉ๐๐ง๐ฉ', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)$/i
export default handler
