const URL_API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const OPTIONS = { crossDomain: true }

function onError(id){
    console.log(`EROR! No se pudo obtener el personaje con id = ${id}.`)
}

function obtenerPersonaje(id) {
    new Promise( function( resolve, reject ) {

		const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`

        $.get( URL, OPTIONS, function (data) {resolve(data)})
        //con los parametros URL y OPTIONS ya tengo lo necesario para realizar el request, si este tiene
        //exito, el objeto que obtengo como respuesta lo recibo como parametro en mi callback
        //(en este caso "data")... mi callback ejecuta la funcion resolve(data) apuntando a .then() 

        .fail(() => reject(id))
        //Si por algun motivo el request no se concreta correctamente se ejecutara reject()
        //dicha funcion apunta al .catch()
    })
    .then(function (personaje) {
        console.log(`Hola, me llamo ${personaje.name}`)
        if (id < 10) {
            id ++
            obtenerPersonaje(id)
        }
    })
    .catch(onError) //reject() nos envia como parametro el id del personaje que no se pudo 
    //consultar y aqui se lo pasamos a la funcion onError para que muestre el mensaje de error en pantalla
}

obtenerPersonaje(1)
    
