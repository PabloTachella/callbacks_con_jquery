const URL_API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const URL = `${URL_API}${PEOPLE_URL.replace(':id', 1)}`
const OPTIONS = { crossDomain: true }
let onPeopleResponse = function (people) { console.log(`Hola, me llamo ${people.name}`) }

$.get( URL, OPTIONS, onPeopleResponse)