const fetchaData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchaData(API)
.then(data => {
    console.log(data.info.count);
    return fetchaData(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log(data.name);
    return fetchaData(data.origin.url)
})
.then(data => {
    console.log(data.dimension);
})
.catch(err => console.error(err));
