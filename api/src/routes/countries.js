const { Router } = require('express');
const {Country, Country_Activity} = require('../db');
const router = Router();
const { Op } = require('sequelize');


//Get all countries or get a country by name
router.get('/',async (req, res) => {
    let {name} = req.query;
    if(name){
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        try{    
            let country = await Country.findAll({
                where: {commonName: {[Op.substring]:name}}
            });
            if (country) return res.send(country);
            else return res.status(400).send('Country not found');
        }catch(e){
            console.log(e);
            return res.send(e);
        }
    }
    else{
        try{
            return res.send(await Country.findAll({
                order: ['commonName']
            }));
        }catch(e){
            console.log(e);
            return res.send(e);
        }
    }
});

//Get country by id
router.get('/:id', async (req, res) => {
    let {id} = req.params;
    id = id.toUpperCase();
    if(id.length !== 3) return res.status(400).send('The id must have only 3 letters');
    try{
        let country = await Country.findByPk(id);
        let acts = await country.getActivities();
        if (acts.length > 0) {
            let response = [];
            response.push(country, acts);
            return res.json(response);
        }
        if(country) return res.send(country);
        else return res.status(400).send('Country not found');
    }catch(e){
        console.log(e)
        return res.send(e);
    }
});

module.exports = router;