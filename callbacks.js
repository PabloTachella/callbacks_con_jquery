const URL_API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const OPTIONS = { crossDomain: true }

function onError(id){
    console.log(`EROR! No se pudo obtener el personaje con id = ${id}.`)
}

function obtenerPersonaje(id) {
    return new Promise( function( resolve, reject ) {

		const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`

        $.get( URL, OPTIONS, function (data) {resolve(data)})
        //con los parametros URL y OPTIONS ya tengo lo necesario para realizar el request, si este tiene
        //exito, el objeto que obtengo como respuesta lo recibo como parametro en mi callback
        //(en este caso "data")... mi callback ejecuta la funcion resolve(data) apuntando a .then() 

        .fail(() => reject(id))
        //Si por algun motivo el request no se concreta correctamente se ejecutara reject()
        //dicha funcion apunta al .catch()
    })
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    //.all() recibe un array de promesas como parametro
    .then(personaje => console.log(personaje))
    //el parametro personaje que esta recibiendo .then es un array de objetos con los 10 primeros personajes
    //podria manipularlo asi .then(personaje => console.log(personaje[0].name)) e imprimiria el nombre del 1er personaje
    .catch(onError)

    
