import axios from "axios";
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions/actions";
import styles from './activityForm.module.css';
import BackButton from '../backButton/backButton'

export function ActForm (){

    const dispatch = useDispatch();
    let countries = useSelector((state)=> state.countries)
    //let activities = useSelector((state)=> state.activities)
    
    
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[])

    // let [actName, setactName] = useState([]);

    // async function addActDiv(){
    //     let acts = await dispatch(getActivities());
    //     acts = acts.payload;    
    //     let actNames = [];
    //     let countriesNames = []
    //     for (let i = 0; i < acts.length; i++) {
    //         actNames.push(acts[i].name);
    //         setactName(actName.concat(actNames))
    //     }
        
    //     for (let i = 0; i < acts.length; i++) {
    //         countriesNames.push(acts[i].Countries)
    //     }
    //     console.log(countriesNames);
    // }

    let [activity, setActivity] = useState({
       name: '',
       difficulty: 1,
       duration: 1,
       season: 'Indifferent',
       countryId: []
    });

    let [selected, setSelected] = useState([])

    function handleSelect(e){
        if(e.target.value !== '---') setSelected(selected.concat(e.target.value))
    }
    
    function handleChange(e){
        setActivity({
            ...activity,
            [e.target.name]: [e.target.value],
            
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        let post = activity;
        post.name = post.name[0];
        post.countryId = selected;
        post.duration = post.duration[0]
        post.difficulty = post.difficulty[0]
        if (Array.isArray(post.season)) post.season = post.season[0]
        await axios.post('http://localhost:3001/activities',{post})
        .then(resp => alert(resp.data))
        .catch(err => alert(err.response.data))
        setSelected([])
    }
    
    return(
        <div className={styles.pageContainer}>
            <div className={styles.back}>
                <BackButton/>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>

                    <div className={styles.divName}>
                        <label>Add Activity</label> <br></br>
                        <input autoComplete="off" type='text' name={'name'} placeholder="Activity name..." onChange={handleChange} required></input>
                    </div>
                    
                    <div className={styles.divProps}>

                        <div>
                            <label>Difficulty: </label>
                            <select key="difficultySelect" required name={'difficulty'} onChange={handleChange}>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div>
                            <label>Duration: </label>
                            <input key="durationInput" defaultValue="1" required type='number' min='1' max='24' name={'duration'} onChange={handleChange}></input><label> Hours</label>
                        </div>
                        
                        <div>
                            <label>Season: </label>
                            <select key="seasonSelect" required onChange={handleChange} name={'season'}>
                                <option selected>Indifferent</option>
                                <option>Autumn</option>
                                <option>Winter</option>
                                <option>Spring</option>
                                <option>Summer</option>
                            </select>
                        </div>

                    </div>

                    <div className={styles.divCountries}>
                        <label>Country / Countries: </label> <br></br>
                        <select key="countriesSelect" required name={'countryId'} onChange={(e) => {handleSelect(e);}}>
                            <option selected>---</option>
                            {countries.map(c => (<option key={c.id} value={c.id}>{c.commonName}</option>))}
                        </select>
                    </div>

                    <div>
                        <label>Selected: </label>
                        <label>{' ' + selected}</label>
                    </div>

                    <button className={styles.sendButton} type="submit" name={'name'} onChange={handleChange} >Send</button>
                </form>
            </div>

            {/* <div>
                Activities Created:
                    <div>
                        {actName.map(a => (<label key={a}>{a}<br></br></label>))}
                    </div>
            </div> */}

        </div>
    )
}

export default ActForm;

