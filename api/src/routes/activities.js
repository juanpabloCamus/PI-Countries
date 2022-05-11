const { Router } = require('express');
const { json } = require('express/lib/response');
const {Country, Activity, Country_Activity} = require('../db');
const router = Router();

//Get all activities
router.get('/', async (req, res) => {
    try{
        let response = await Activity.findAll({
            include:{
                model: Country
            }
        })
        
        return res.send(response)
    }catch(e){
        console.log(e)
        return res.send(e)
    }
});

//Post an activity
router.post('/', async (req, res) => {
    let {name, difficulty, duration, season, countryId} = req.body.post;
    difficulty = parseInt(difficulty);
    duration = parseInt(duration);
    if(name && difficulty && duration && season && countryId){
        if(countryId.length < 1) return res.status(400).send('Wrong data');
        if(!( difficulty >= 1 && difficulty <= 5)) return res.status(400).send('Wrong data');
        if(!( duration >= 1 && duration <= 24)) return res.status(400).send('Wrong data');
        if(season === 'Summer' || season === 'Winter' || season === 'Spring' || season === 'Autumn' || season === 'Indifferent'){
            try{
                let act = await Activity.findOrCreate({
                    where:{
                        name: name,
                        difficulty: difficulty,
                        duration: duration,
                        season: season
                    }
                });
                act[0].addCountries(countryId);
                if(!act[1]) return res.send('This activity is already created');
                console.log(`This activity has been created now`);
                console.log(req.body.post);
                return res.send('Activity Created!');
            }catch(e){
                console.log(e);
                return res.send(e);
            }
        }
        else{
            return res.status(400).send('Wrong data');
        }
    }
    else{
        console.log('Missing data');
        return res.status(400).send('Missing data');
    }
});

module.exports = router;