const URL_API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'


const OPTIONS = { crossDomain: true }
let onPeopleResponse = function (people) { console.log(`Hola, me llamo ${people.name}`) }

function obtenerPersonaje(id) {
    const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
    $.get( URL, OPTIONS, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//Por el asincronismo de JS. No sabemos en que orden nos llegaran las respuestas, 
//esto depende del servidor y de cada uno de los requests. Iniciamos los requests en un 
//determinado orden pero no sabemos en que orden van a llegar.