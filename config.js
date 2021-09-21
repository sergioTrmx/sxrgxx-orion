const ownerNumber = ["5215623741080@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '5215623741080' 
// mude para seu numero

const callbotmsgs = ['orion', 'sxrgxx']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, battery) => {
    return `MENU DO Sxrgxx-BOT COM 434 COMANDOS, BATERIA: ${battery}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'Bienvenido'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '𝙎𝙭𝙧𝙜𝙭𝙭 𝙊𝙧𝙞𝙤𝙣🇲🇽\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Su número esta bloqueado😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contacte con el creador🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Mamaste jotito💢*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `El sistema de recuento de mensajes es por grupo y consiste en clasificar, enumerar y eliminar personas en consecuencia. con la frecuencia de mensajes en el grupo, vea a continuación los comandos para administrar los mensajes del grupo:

checkativo (marcar) - enumera la frecuencia del mensaje del miembro marcado
rankativo - rankea a las personas mas activas del grupo
banativos (num) - eliminar miembros con una cierta cantidad de números de msg hacia abajo
filtroativo (num) - lista miembros con una cantidad de mensajes para abajo]
atividade - lista actividad de todos los miembros del grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Tu é adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho com antiporn ativado, ja sabe né...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu é adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Valiste verga, te vamos a llenar de binarios 😈💢...'
// mensagem de ban no antilink

const adminmsglink = 'links bloqueados bro te salvaste por ser admn 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Error, intenta de nuevo:/'
// mensagem de erro

const notregister = `*Comando no registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado 😡'
const cadebot = 'Me chamou onii-chan 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Vai te foder, jogador de ff, comprador de pack do pézinho'
const botputa = 'Senhora sua mãe 😡'
const botgay = 'Falou o manja rola 😡'
const botviado = 'Falou o manja rola 😡'
const numbotfeio = 'senhora sua mãe 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Espera un poco... ⌛',
    success: '✔️ Listo! ✔️',
    error: {
        stick: '❌ Error al convertir a sticker❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando solo puede ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado por el creador! ❌',
        ownerB: '❌ Este comando só pode ser usado por proprietário! ❌',
        admin: '❌ Solo los admins pueden usar este comando ❌',
        Badmin: '❌ Este comando solo se puede usar cuando el bot es admin! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Sergio^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=380944218564:+380 94 421 8564\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `El sistema de votación gp consiste en el sistema de votación normal, pero solo para grupos. vea a continuación los comandos y sus funciones a continuación:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia la votacion en grupo
Ex: ${prefix}gpvotoinit tema | opcion1 | opcion2
Obs: puedes crear las opciones que quieras 

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpia todos los votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Ve las estadisticas actuales de los votos

${prefix}gpvoto - Vota en una opcion
Ex: ${prefix}gpvoto opcion1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Termina las votaciones 

${prefix}gpbroadvoto
${prefix}gpvotobroad - hace una transmicion al grupo de los votos`

const votohelp = `El sistema de votación consiste en que todos los usuarios del bot puedan votar y tener una buena experiencia, hay comandos para administrar esta encuesta. Vea a continuación los comandos y sus funciones a continuación:

${prefix}initvoto
${prefix}votoinit - Inicia votacion general
Ex: ${prefix}votoinit tema | opcion1 | opcion2
Obs: puedes crear las opciones que quieras 

${prefix}clearvoto
${prefix}votoclear - Limpia todos los votos

${prefix}votostatus
${prefix}statusvoto - Ve estadisticas de los votos

${prefix}voto - Vota una opcion
Ex: ${prefix}voto opcion

${prefix}votofinish
${prefix}finishvoto - Terminan votaciones

${prefix}broadvoto
${prefix}votobroad - hace una transmisión al grupo de los votos`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs