const axios = require('axios');
const url = 'https://restcountries.com/v3/all';
const {Country} = require('../db');

const getParsedApi = async () => {
    let api = await axios(url);
    api = api.data.map((c) => {
        return {
            id: c.cca3,
            commonName: c.name.common,
            officialName: c.name.official,
            capital: c.capital ? c.capital[0] : 'No Capital',
            continent: c.continents[0],
            subregion: c.subregion === null ? '' : c.subregion,
            languages: c.languages === null || c.languages === undefined ? '' : Object.values(c.languages).toString(),
            area: c.area,
            population: c.population,
            currencies: c.currencies === null || c.currencies === undefined ? '' : Object.values(c.currencies)[0].name,
            flagImg: c.flags[1],
            maps: c.maps.googleMaps
        }
    })
    
    return api;
}

module.exports = getParsedApi