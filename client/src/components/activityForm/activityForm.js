import axios from "axios";
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions/actions";
import styles from './activityForm.module.css';
import BackButton from '../backButton/backButton'

export function ActForm (){

    const dispatch = useDispatch();
    let countries = useSelector((state)=> state.countries);
   
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[]);

    let [activity, setActivity] = useState({
       name: '',
       difficulty: 1,
       duration: 1,
       season: 'Indifferent',
       countryId: []
    });

    let [selected, setSelected] = useState([]);

    let [error, setError] = useState({
        name: false,
        difficulty: false,
        duration: false,
        season:false,
        countryId: false
    });

    function handleSelect(e){
        if(e.target.value !== '---') setSelected(selected.concat(e.target.value))
        if(e.target.name === 'countryId'){
            if (selected.length <  0) return setError({...error, countryId: true})
            if (e.target.value.length > 3) return setError({...error, countryId: true})
            else return setError({...error, countryId: false});
        }
    };
    
    function handleErrors(e){

        if(e.target.name === 'name'){
            console.log(e.target.value);
            if (!(/^[a-zA-Z\s]{4,30}$/.test(e.target.value))) return setError({...error, name: true});
            else return setError({...error, name: false});
        }

        if(e.target.name === 'difficulty'){
            if(e.target.value < 1 || e.target.value > 5) return setError({...error, difficulty: true});
            else return setError({...error, difficulty: false});
        }

        if(e.target.name === 'duration'){
            if(e.target.value < 1 || e.target.value > 24) return setError({...error, duration: true});
            else return setError({...error, duration: false});
        }

        if(e.target.name === 'season'){
            
            if(!(e.target.value === 'Summer' || e.target.value === 'Winter' || e.target.value === 'Spring' || e.target.value === 'Autumn' || e.target.value === 'Indifferent')) return setError({...error, season: true});
            else return setError({...error, season: false});
        }

    }

    function handleChange(e){
        console.log('handelchange');
        handleErrors(e);
        setActivity({
            ...activity,
            [e.target.name]: [e.target.value],
        })
    };

    async function handleSubmit(e){
        console.log('handlesubmit');
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
    };
    
    return(
        <div className={styles.pageContainer}>

            <div className={styles.back}>
            <BackButton/>
            </div>

            <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
            
                <div className={styles.divName}>
                    <label>Add Activity</label> <br></br>
                    <input className={styles.inputName} key='name' autoComplete="off" type='text' name={'name'} placeholder="Activity name..." onChange={handleChange}></input>
                    {error.name ? <span className={styles.errors}>Activity must be between 4 and 30 characters.<br></br>Numbers and alphanumerics are not allowed.</span> : null}
                </div>

                <div className={styles.divProps}>
                    <div>
                        <label>Difficulty: </label>
                        <select key="difficultySelect" required name={'difficulty'} onChange={handleChange}>
                            <option value = {1} selected>1 - Easy</option>
                            <option value = {2} >2 - Light</option>
                            <option value = {3} >3 - Medium</option>
                            <option value = {4} >4 - Hard</option>
                            <option value = {5} >5 - Extreme</option>
                        </select>
                        {error.difficulty ? <span className={styles.errors}><br></br>Difficulty must be between 1 and 5</span> : null}
                    </div>

                    <div>
                        <label>Duration: </label>
                        <input key="durationInput" defaultValue="1" required type='number' min='1' max='24' name={'duration'} onChange={handleChange}></input><label> Hours</label>
                        {error.duration ? <span className={styles.errors}><br></br>Duration must be between 1 and 24 hours</span> : null}
                    </div>
                    <div>
                        <label>Season: </label>
                        <select key="seasonSelect" required onChange={handleChange} name={'season'}>
                            <option selected value='Indifferent'>Indifferent</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                        {error.season ? <span className={styles.errors}><br></br>Season must be autumn, winter, spring, summer or indifferent</span> : null}
                    </div>
                </div>

                <div className={styles.divCountries}>
                <label>Country / Countries: </label> <br></br>
                <select key="countriesSelect" required name={'countryId'} onChange={(e) => {handleSelect(e);}}>
                    <option selected disabled>---</option>
                    {countries.map(c => (<option key={c.id} value={c.id}>{c.commonName}</option>))}
                </select>
                {error.countryId ? <span className={styles.errors}><br></br>You must select one or more country</span> : null}
                </div>

                <div>
                <label>Selected: </label>
                <label>{' ' + selected}</label>
                </div>

                <button className={styles.sendButton} type="submit" name={'name'}>Send</button>

            </form>
            </div>
        </div>
    )
}

export default ActForm;

    //  let activities = useSelector((state)=> state.activities)
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



    //        <div>
    //             Activities Created:
    //                 <div>
    //                     {actName.map(a => (<label key={a}>{a}<br></br></label>))}
    //                 </div>
    //         </div> 

    // (!(/^[a-zA-Z\s]{4,30}$/.test(e.target.value)))