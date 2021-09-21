const ttthelp = (p) => {
    return `🔥 *JOGO DE LA VELA* 🔥

Disponible solo para grupos

¿Como Jugar?

➻❥ *${p}ttt <dificuldade>*

DIFICULTADES:

easy: solo para divertir

normal: 66% de probabilidad de bloquear o ganar

hard: 100% de probabilidad de bloquear o ganar

impossible: No lo intentes amigo😳

*INTERVALO:*

Solo puedes comenzar otro juego después de 2 minutos, después de que comience el juego anterior, El partido terminará automáticamente después de 2 minutos

MARCANDO LAS COORDENADAS:
➻❥ *${p}coord <coordenada>*
EJEMPLO:
➻❥ ${p}coord a1


	🌀1️⃣2️⃣3️⃣
	🅰️❌🔲🔲
	🅱️🔲🔲🔲
	©️🔲🔲🔲

VENDO STATUS:
➻❥ *${p}tttme*

RECOMPENSAS:

MODO EASY:
Gano: + [ 25 / 50 ]
Perdio: - [ 200 / 200 ]

MODO NORMAL
Gano: + [ 75 / 150 ]
Perdio: - [ 75 / 150 ]

MODO HARD
Gano: + [ 200 / 400 ]
Perdio: - [ 25 / 50 ]

MODO IMPOSSIBLE
Gano: + [ 1000 / 2000 」
Perdio: - [ 0 / 0 」

JUEGO EMPATADO

[ 0 / 0 ]

PARTIDA NO FINALIZADA

Perdio: - [ 75 / 150 ]`
}

exports.ttthelp = ttthelp
