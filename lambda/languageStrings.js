/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SPACE: 'Space',
            FOOTBALL: 'Football',
            
            VIDEOGAMES: 'Videogames',
            
            SKILL_NAME: '%s Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Here\'s your fact : ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Facts skill can\'t help you with that.  It can help you discover facts if you say tell me a fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            PREFERENCE_ERROR: 'Sorry, I am unable to retrieve your personalized identity.',
            STOP_MESSAGE: 'Goodbye!',
            CONFIRMATION_MESSAGE: 'Ok %s, I have added %s as a favorite topic',
            SPACE_FACTS:
                [
                    'A year on Mercury is just 88 days long.',
                    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                    'On Mars, the Sun appears about half the size as it does on Earth.',
                    'Jupiter has the shortest day of all the planets.',
                    'The Sun is an almost perfect sphere.',
                ],
            FOOTBALL_FACTS:
                [
                    'Football is the most watched and most played sport on earth.',
                    'The fastest goal ever scored took only 2.4 seconds.',
                    'Only 8 countries have won the World Cup.',
                ],
            VIDEOGAMES_FACTS:
                [
                    'The only requirement for playing DOOM 64 is having a device with a screen, and sometimes, even this is optional',
                    'In the game FarCry 4 at the beginnig of the story, when Peygan ask you to wait, if you wait 13 minutes, he will come back and help you, making that you can finish the game in less than half an hour',
                    'In bloodborne, if you enter in the tower of the Healing Church Workshop, if you keep going downstair, you will find a path where if you do a litlle parkour you can fight with a secret mini boss and then unlock a new location',
                    'In the Assassins Creed Black Flag, if you going down to the atocha wrech and enter inside the ship, if you go around the right corner and you stay quiet, Edward will see through the window a kraken trying to eat a whale',
                    'Did you know that, the original plan in Pokem??n was that instead of Pikachu, Cleafairy was going to be the image of the franchise',
                    'Did you know, Elden Ring won game of the year in 2022',
                    'In Enter the Gungeon you can find weapons that reference portal, star wars, megaman, doom, blade runner and many others',
                    'When you beat Celeste, the amount of strawberries you have collected get turned into a pie',
                    'The game director behind God of War 2018, Cory Barlog, also directed God of War one and two',
                    'In Aragami, you unlock a new outfit if you beat every level without killing anyone',
                ],
        }
    },
    es: {
        translation: {
            SPACE: 'Espacio',
            FOOTBALL: 'F??tbol',
            
            VIDEOGAMES: 'Videojuegos',
            
            SKILL_NAME: '%s Curiosidades',
            GET_FACT_MESSAGE: 'Aqu?? est?? tu curiosidad: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Vale %s, Aqu?? est?? tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad del espacio o puedes decir salir... C??mo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La habilidad de Hechos no puede ayudarte con eso. Puede ayudarte a descubrir hechos si dices cu??ntame un hecho. ??En qu?? te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            PREFERENCE_ERROR: 'Lo siento, no puedo recuperar su identidad personalizada',
            STOP_MESSAGE: 'Adi??s!',
            CONFIRMATION_MESSAGE: 'Vale %s, he a??adido %s como curiosidad favorita.',
            SPACE_FACTS:
                [
                    'Un a??o en Mercurio es de solo 88 d??as',
                    'A pesar de estar m??s lejos del Sol, Venus tiene temperaturas m??s altas que Mercurio',
                    'En Marte el sol se ve la mitad de grande que en la Tierra',
                    'Jupiter tiene el d??a m??s corto de todos los planetas',
                    'El sol es una esf??ra casi perfecta',
                ],
            FOOTBALL_FACTS: 
                [
                    'El f??tbol es el deporte m??s visto y m??s jugado del mundo.',
                    'El gol m??s r??pido jam??s marcado tom?? solo 2.4 segundos',
                    'Solo 8 pa??ses han ganado la Copa del Mundo',
                ],
            VIDEOGAMES_FACTS:
                [
                    'El ??nico requisito para jugar a DOOM 64 es tener un dispositivo con pantalla, y a veces, es opcional',
                    'En el juego FarCry 4 si al principio de la historia, cuando Peygan te pide que esperes, si realmente esperas durante 13 minutos el vuelve y te ayuda, permitiendote acabar el juego en menos de media hora',
                    'En bloodborne, si entras en la torre del taller de la iglesia de la sanaci??n y bajas todos los pisos posibles, llegar?? un momento, donde encontrar??s un camino, en el que si haces un parkour, podr??s pelear contra un mini boss y desbloquear una zona secreta',
                    'En el Assassins Creed Black Flag, si exploras el hundimiento del atocha y entras en el barco, si vas hac??a la parte derecha y te quedas quieto, Edward mirar?? por la ventana y ver?? un Kraken intentando comerse una ballena',
                    'Sab??as que originalmente en Pokem??n, la cara de la franquicia iba a ser Cleafairy en lugar de Pikachu?',
                    'Sab??as que, Elden Ring gan?? juego del a??o en 2022',
                    'En Enter the Gungeon, se pueden encontrar armas que referencian portal, star wars, megaman, doom, blade runner y muchos otros',
                    'Cuando te pasas Celeste, las fresas coleccionadas se pueden convertir en un pastel',
                    'El director del juego God of War 2018, Cory Barlog, tambien dirigio God of War uno y dos',
                    'En Aragami, se puede desbloquear un nuevo traje si consigues pasrte todos los niveles sin matar a nadie',
                ],
        }
    },
    de: {
        translation: {
            SPACE: 'Plads',
            FOOTBALL: 'Fodbold',            
            SKILL_NAME: '%s Fakten',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, ???Nenne mir einen Fakt ??ber den Weltraum???, oder du kannst ???Beenden??? sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            FALLBACK_MESSAGE: 'Fakta-f??rdigheden kan ikke hj??lpe dig med det. Det kan hj??lpe dig med at finde fakta, hvis du siger fort??l mig en kendsgerning. Hvad kan jeg hj??lpe dig med?',
            FALLBACK_REPROMPT: 'Wie kann ich dir helfen?',
            ERROR_MESSAGE: 'Es ist ein Fehler aufgetreten.',
            PREFERENCE_ERROR: 'Jeg kan desv??rre ikke hente din personlige identitet',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            CONFIRMATION_MESSAGE: 'Ok %s, jeg har tilf??jet %s som et yndlingsemne.',
            SPACE_FACTS:
                [
                    'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                    'Die Venus ist zwar weiter von der Sonne entfernt, hat aber h??here Temperaturen als Merkur.',
                    'Venus dreht sich entgegen dem Uhrzeigersinn, m??glicherweise aufgrund eines fr??heren Zusammensto??es mit einem Asteroiden.',
                    'Auf dem Mars erscheint die Sonne nur halb so gro?? wie auf der Erde.',
                    'Jupiter hat den k??rzesten Tag aller Planeten.',
                ],
            FOOTBALL_FACTS:
                [
                    'Fodbold er den mest sete og mest spillede sport p?? jorden.',
                    'Det hurtigste m??l, der nogensinde blev scoret, tog kun 2,4 sekunder.',
                    'Kun 8 lande har vundet verdensmesterskabet.',
                ],
        }
    },
    ja: {
        translation: {
            SPACE: '????????????',
            FOOTBALL: '??????????????????',            
            SKILL_NAME: '%s ?????????????????????',
            GET_FACT_MESSAGE: '????????????????????????',
            GET_FACT_MESSAGE_PERSONALIZED: '??????????????????%s??????????????????????????????????????????',
            HELP_MESSAGE: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
            HELP_REPROMPT: '?????????????????????',
            ERROR_MESSAGE: '????????????????????????????????????????????????????????????',
            PREFERENCE_ERROR: '???????????????????????????????????????ID????????????????????????',
            STOP_MESSAGE: '???????????????',
            CONFIRMATION_MESSAGE: '??????????????????%s??????????????????????????????????????????%s?????????????????????',
            SPACE_FACTS:
                [
                    '???????????????????????????88????????????',
                    '?????????????????????????????????????????????????????????????????????????????????????????????????????????',
                    '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                    '??????????????????????????????????????????????????????????????????????????????????????????????????????',
                    '?????????<sub alias="????????????">1???</sub>??????????????????????????????????????????',
                    '?????????????????????50?????????????????????????????????????????????????????????',
                ],
            FOOTBALL_FACTS:
                [
                    '???????????????????????????????????????????????????????????????????????????????????????????????????',
                    '?????????????????????????????????????????????????????????2.4????????????',
                    '??????????????????????????????????????????8??????????????????',
                ],
        }
    },
    fr: {
        translation: {
            SPACE: 'Espace',
            FOOTBALL: 'Football',            
            SKILL_NAME: '%s Anecdotes',
            GET_FACT_MESSAGE: 'Voici votre anecdote : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Voici votre anecdote : ',
            HELP_MESSAGE: 'Vous pouvez dire donne-moi une anecdote, ou, vous pouvez dire stop... Comment puis-je vous aider?',
            HELP_REPROMPT: 'Comment puis-je vous aider?',
            FALLBACK_MESSAGE: 'La comp??tence Faits ne peut pas vous aider. Cela peut vous aider ?? d??couvrir des faits si vous dites dites-moi un fait. En quoi puis-je vous aider?',
            FALLBACK_REPROMPT: 'Comment puis-je vous aider?',
            ERROR_MESSAGE: 'D??sol??, une erreur est survenue.',
            PREFERENCE_ERROR: 'D??sol??, je n\'arrive pas ?? r??cup??rer votre identit?? personnalis??e',
            STOP_MESSAGE: 'Au revoir!',
            CONFIRMATION_MESSAGE: 'Ok %s, j\'ai ajout?? %s comme sujet favori.',
            SPACE_FACTS:
                [
                    'Une ann??e sur Mercure ne dure que 88 jours.',
                    'En d??pit de son ??loignement du Soleil, V??nus conna??t des temp??ratures plus ??lev??es que sur Mercure.',
                    'Sur Mars, le Soleil appara??t environ deux fois plus petit que sur Terre.',
                    'De toutes les plan??tes, Jupiter a le jour le plus court.',
                    'Le Soleil est une sph??re presque parfaite.',
                ],
            FOOTBALL_FACTS:
                [
                    'Le football est le sport le plus regard?? et le plus pratiqu?? sur terre.',
                    'Le but le plus rapide jamais marqu?? n\'a pris que 2,4 secondes.',
                    'Seuls 8 pays ont remport?? la Coupe du monde.',
                ],
        }
    },
    it: {
        translation: {
            SPACE: 'Spazio',
            FOOTBALL: 'Calcio',            
            SKILL_NAME: '%s Aneddoti',
            GET_FACT_MESSAGE: 'Ecco il tuo aneddoto: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s ,Ecco il tuo aneddoto: ',
            HELP_MESSAGE: 'Puoi chiedermi un aneddoto dallo spazio o puoi chiudermi dicendo "esci"... Come posso aiutarti?',
            HELP_REPROMPT: 'Come posso aiutarti?',
            FALLBACK_MESSAGE: 'L\'abilit?? Fatti non pu?? aiutarti in questo. Pu?? aiutarti a scoprire i fatti se dici dimmi un fatto. In cosa posso aiutarti?',
            FALLBACK_REPROMPT: 'Come posso aiutarti?',
            ERROR_MESSAGE: 'Spiacenti, si ?? verificato un errore.',
            PREFERENCE_ERROR: 'Mi dispiace, non riesco a recuperare la tua identit?? personalizzata',
            STOP_MESSAGE: 'A presto!',
            CONFIRMATION_MESSAGE: 'Ok %s, ho aggiunto %s come argomento preferito',
            SPACE_FACTS:
                [
                    'Sul pianeta Mercurio, un anno dura solamente 88 giorni.',
                    'Pur essendo pi?? lontana dal Sole, Venere ha temperature pi?? alte di Mercurio.',
                    'Su Marte il sole appare grande la met?? che su la terra. ',
                    'Tra tutti i pianeti del sistema solare, la giornata pi?? corta ?? su Giove.',
                    'Il Sole ?? quasi una sfera perfetta.',
                ],
            FOOTBALL_FACTS:
                [
                    'Il calcio ?? lo sport pi?? seguito e pi?? giocato al mondo.',
                    'Il gol pi?? veloce mai segnato ha richiesto solo 2,4 secondi.',
                    'Solo 8 paesi hanno vinto la Coppa del Mondo.',
                ],
        }
    },
    pt: {
        translation: {
            SPACE: 'Espa??o',
            FOOTBALL: 'Futebol',            
            SKILL_NAME: '%s Fatos',
            GET_FACT_MESSAGE: 'Aqui vai: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s Aqui vai: ',
            HELP_MESSAGE: 'Voc?? pode me perguntar por um fato interessante sobre o espa??o, ou, fexar a skill. Como posso ajudar?',
            HELP_REPROMPT: 'O que vai ser?',
            FALLBACK_MESSAGE: 'A habilidade Fatos n??o pode ajud??-lo com isso. Pode ajud??-lo a descobrir fatos, se voc?? disser conte-me um fato. Com o que posso ajudar?',
            FALLBACK_REPROMPT: 'Eu posso contar fatos sobre o espa??o. Como posso ajudar?',
            ERROR_MESSAGE: 'Desculpa, algo deu errado.',
            PREFERENCE_ERROR: 'N??o consigo recuperar sua identidade personalizada',
            STOP_MESSAGE: 'Tchau!',
            CONFIRMATION_MESSAGE: 'Ok %s, adicionei %s como um t??pico favorito',
            SPACE_FACTS:
                [
                    'Um ano em Merc??rio s?? dura 88 dias.',
                    'Apesar de ser mais distante do sol, Venus ?? mais quente que Merc??rio.',
                    'Visto de marte, o sol parece ser metade to tamanho que n??s vemos da terra.',
                    'J??piter tem os dias mais curtos entre os planetas no nosso sistema solar.',
                    'O sol ?? quase uma esfera perfeita.',
                ],
            FOOTBALL_FACTS:
                [
                    'O futebol ?? o esporte mais assistido e praticado no planeta.',
                    'O gol mais r??pido j?? marcado levou apenas 2,4 segundos',
                    'Apenas 8 pa??ses ganharam a Copa do Mundo',
                ],
        }
    },
    hi: {
        translation: {
            SPACE: '??????????????????????????????',
            FOOTBALL: 'Football',          
            SKILL_NAME: '%s facts',
            GET_FACT_MESSAGE: '?????? ??????????????? ???????????? fact: ',
            GET_FACT_MESSAGE_PERSONALIZED: '????????? ?????? %s, ?????? ??????????????? ???????????? fact: ',
            HELP_MESSAGE: '?????? ???????????? ????????? fact ??????????????? ????????? ???????????? ????????? ?????? ????????? exit ?????? ????????? ???????????? ?????????... ?????? ???????????? ???????????? ??????????????????????',
            HELP_REPROMPT: '????????? ???????????? ????????? ?????????????????? ?????? ?????????????????? ?????? ???????????? ??????????',
            ERROR_MESSAGE: '????????????, ????????? ?????? ????????? ???????????? ????????????. ???????????? ?????? repeat ?????? ???????????? ??????????',
            PREFERENCE_ERROR: '??????????????? ????????????, ????????? ???????????? ??????????????????????????? ??????????????? ???????????? ????????????????????? ???????????? ????????? ?????????????????? ',
            STOP_MESSAGE: '??????????????? bye, ????????? ??????????????? ?????????',
            CONFIRMATION_MESSAGE: '????????? ?????? %s, ??????????????? %s ?????? ????????????????????? ???????????? ?????? ????????? ????????? ??????????????? ??????',
            SPACE_FACTS:
                [
                    '????????? ????????? ????????? ?????? ????????? ????????? ???????????? ??????????????? ????????? ???????????? ?????????',
                    '???????????? ?????? ????????? ???????????? ?????? ??????????????????, Venus ?????? ?????????????????? Mercury ?????? ????????????????????? ???????????? ?????????',
                    'Earth ?????? ??????????????? ?????? Mars ????????? ???????????? ?????? size ????????????????????? ????????? ?????????',
                    '???????????? ?????????????????? ????????? Jupiter ?????? ????????? ???????????? ?????? ?????????',
                    '???????????? ?????? shape ???????????? ???????????? ???????????? ????????? ?????????'
                ],
            FOOTBALL_FACTS:
                [
                    '?????????????????? ???????????? ?????? ???????????? ?????????????????? ???????????? ???????????? ???????????? ?????? ???????????? ?????????????????? ???????????? ???????????? ???????????? ????????? ??????',
                    '?????? ?????? ?????? ???????????? ???????????? ????????? ???????????? ????????? ???????????? 2.4 ??????????????? ?????? ????????? ?????????',
                    '???????????? 8 ??????????????? ?????? ??????????????? ?????? ???????????? ??????',
                ],
        }
    },
    ar: {
        translation: {
            SPACE: '????????',
            FOOTBALL: '?????? ??????????',            
            SKILL_NAME: '%s ??????????',
            GET_FACT_MESSAGE: '???????????????? ?????????? ????',
            GET_FACT_MESSAGE_PERSONALIZED: '?????????? %s ?????????????????? ?????????? ????',
            HELP_MESSAGE: '???????? ???????? ???????? ???? ???????????? ???? ???????????? ???? ???????? ???????? ???????? ???????????? ???? ????????????. ?????? ???????? ??????????????',
            HELP_REPROMPT: '?????? ???????? ??????????????',
            FALLBACK_MESSAGE: '?????????? ?????????????? ???? ???????? ???? ???????????? ???? ??????. ???????? ???? ???????????? ???? ???????????? ?????????????? ?????? ?????? ???? ???? ??????????. ?????????? ???????????? ????????????????',
            FALLBACK_REPROMPT: '?????? ???????? ??????????????',
            ERROR_MESSAGE: '???????????? ?????? ??????.',
            PREFERENCE_ERROR: '?????????? ?? ???? ???????????? ?????????????? ?????????? ??????????????',
            STOP_MESSAGE: '???? ??????????????',
            CONFIRMATION_MESSAGE: '?????????? %s ?? ?????? ???????? %s ???????????? ?????????? ????????',
            SPACE_FACTS:
                [
                    '?????? ???????? ?????????? ?????? ?????????? ???? 88 ?????? ??????.',
                    '?????? ?????????? ???? ?????? ???????? ???????????? ???????? ???? ???????????? ?????? ?????? ?????????? ???? ?????????? ?????????? ???????? ???? ?????? ?????? ??????????.',
                    '?????? ?????? ?????????????? ???????? ?????????? ?????????? ?????? ?????????? ???????? ???????? ???? ?????? ??????????.',
                    '???????? ?????????????? ???????? ???????? ?????? ?????? ???????? ??????????????.',
                    '???????? ???????? ?????? ?????????? ?????? ????????????.'
                ],
            FOOTBALL_FACTS:
                [
                    '?????? ?????????? ???? ?????????????? ???????????? ???????????? ?????????????? ?????????? ?????? ?????? ??????????',
                    '???????? ?????? ???? ???????????? ???????????? 2.4 ?????????? ??????',
                    '???????? 8 ?????? ?????? ???????? ????????????',
                ],
        }
    }
}