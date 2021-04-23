const URL_API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const OPTIONS = { crossDomain: true }

function onError(id){
    console.log(`EROR! No se pudo obtener el personaje con id = ${id}.`)
}

function obtenerPersonaje(id) {

    return new Promise( function( resolve, reject ) {
		const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
        $
            .get( URL, OPTIONS, function (data) {resolve(data)})
            .fail(() => reject(id))
    })  
}

async function obtenerPersonajes () {

    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var promesas = ids.map(id => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas)
        //lo que hace await es pausar el flujo de esta funcion, en espera de que todas las promesas se resuelvan
        //una vez que todas las promesas se resuelven guarda ese resultado en la variable personajes
        //esto sucede de forma asincrona, es decir, cuando se pausa el flujo de esta funcion, mientras se
        //espera la resolucion de todas las promesas, el flujo principal JS se sigue ejecutando
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

    
