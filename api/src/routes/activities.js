const { Router } = require('express');
const {Country, Activity} = require('../db');
const router = Router();

//Get all activities
router.get('/', async (req, res) => {
    try{
        res.send(await Activity.findAll())
    }catch(e){
        console.log(e)
        res.send(e)
    }
});

//Post an activity
router.post('/', async (req, res) => {
    let {name, difficulty, duration, season} = req.body;
    if(name && difficulty && duration && season){
        if(!( difficulty >= 1 && difficulty <= 5)) return res.status(400).send('wrong data');
        if(season === 'summer' || season === 'winter' || season === 'spring' || season === 'autumn'){
            try{
                let act = await Activity.findOrCreate({
                    where:{
                        name: name,
                        difficulty: difficulty,
                        duration: duration,
                        season: season
                    }
                });
                if(!act[1]) return res.send('This activity is already created')
                return res.send('Activity Created!')
            }catch(e){
                console.log(e);
                return res.send(e);
            }
        }
        else{
            return res.status(400).send('wrong data');
        }
    }
    else{
        return res.status(400).send('missing data');
    }
});

module.exports = router;