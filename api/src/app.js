const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const getParsedApi = require('./API-Info/countriesInfo');
const {Country} = require('./db')


require('./db.js');

const server = express();
const cors = require('cors');

server.name = 'API';

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Check Database Status
async function areDbLoaded(){
  let c = await Country.findAll();
  return c.length;
}

async function load(){
  let c = await areDbLoaded();
  console.log(c)
  if(c === 0){
    try{
      let api = await getParsedApi();
        api.map(c => {
          Country.create({
            id: c.id,
            commonName: c.commonName,
            officialName: c.officialName ,
            capital: c.capital,
            continent: c.continent,
            subregion: c.subregion,
            languages: c.languages,
            area: c.area,
            population: c.population,
            currencies: c.currencies ,
            flagImg: c.flagImg,
            maps: c.maps
          })  
        })
        console.log('database loaded')
    }catch(e){
      console.log(e)
    }
  }
}

load()

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
