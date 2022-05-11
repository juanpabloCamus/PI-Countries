import axios from "axios";
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions/actions";
import styles from './activityForm.module.css';
import BackButton from '../backButton/backButton';

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
       duration: 0,
       season: 'Indifferent',
       countryId: []
    });

    let [selected, setSelected] = useState([]);
    let [selectedNames, setSelectedNames] = useState([]);
   
    let [error, setError] = useState({
        name: true,
        difficulty: true,
        duration: true,
        season:true,
        countryId: true
    });

    function handleSelect(e){
        let names = [];
        names = countries.filter((c) => c.id === e.target.value)
        names = names.map(c => c.commonName)
        setSelectedNames(selectedNames.concat(names));
        if(e.target.value !== '---') setSelected(selected.concat(e.target.value))
        if(e.target.name === 'countryId'){
            if (selected.length <  0) return setError({...error, countryId: true})
            if (e.target.value.length > 3) return setError({...error, countryId: true})
            else return setError({...error, countryId: false});
        }
    };

    function deleteSelected(e){
        let target = (Object.values(e.target)[1].children);
        setSelectedNames(selectedNames.filter(n => n !== Object.values(e.target)[1].children));
        let targetId = (countries.find(c => c.commonName === target));
        targetId = targetId.id;
        setSelected(selected.filter(i => i !== targetId))
    }

    function handleErrors(e){
        
        if(e.target.name === 'name'){
            
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
        e.preventDefault();
        handleErrors(e);
        setActivity({
            ...activity,
            [e.target.name]: [e.target.value],
        })
    };

    async function handleSubmit(e){
        e.preventDefault()
        if(selected.length < 1) return setError({...error, countryId: true});
        let post = activity;
        if(error.name === false && error.difficulty === false && error.duration === false && error.season === false && error.countryId  === false){
            post.name = post.name[0];
            post.countryId = selected;
            post.duration = post.duration[0]
            post.difficulty = post.difficulty[0]
            if (Array.isArray(post.season)) post.season = post.season[0]
            await axios.post('/activities',{post})
            .then(resp => alert(resp.data))
            .catch(err => {alert(err.response.data); console.log(err);})
            setSelected([]);
            setSelectedNames([]);
        }
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
                    <input className={styles.inputName} key='name' autoComplete="off" type='text' name={'name'} placeholder="Activity name..." onChange={handleChange} ></input>
                    {error.name ? <span className={styles.errors}>Activity must be between 4 and 30 characters.<br></br>Numbers and alphanumerics are not allowed.</span> : null}
                </div>

                <div className={styles.divProps}>
                    <div>
                        <label>Difficulty: </label>
                        <select key="difficultySelect"  name={'difficulty'} onChange={handleChange}>
                        <option disabled selected>---</option>
                            <option value = {1} >1 - Easy</option>
                            <option value = {2} >2 - Light</option>
                            <option value = {3} >3 - Medium</option>
                            <option value = {4} >4 - Hard</option>
                            <option value = {5} >5 - Extreme</option>
                        </select>
                        {error.difficulty ? <span className={styles.errors}><br></br>Difficulty must be between 1 and 5</span> : null}
                    </div>

                    <div>
                        <label>Duration: </label>
                        <input className={styles.dur} key="durationInput" defaultValue="0"  type='number'  name={'duration'} onChange={handleChange}></input><label> Hours</label>
                        {error.duration ? <span className={styles.errors}><br></br>Duration must be between 1 and 24 hours</span> : null}
                    </div>
                    <div>
                        <label>Season: </label>
                        <select key="seasonSelect"  onChange={handleChange} name={'season'}>
                            <option selected disabled>---</option>
                            <option value='Indifferent'>Indifferent</option>
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
                <select key="countriesSelect"  name={'countryId'} onChange={(e) => {handleSelect(e);}}>
                    <option selected disabled>---</option>
                    {countries.map(c => (<option key={c.id} value={c.id}>{c.commonName}</option>))}
                </select>
                {error.countryId ? <span className={styles.errors}><br></br>You must select one or more country</span> : null}
                </div>

                <div>
                <label>Selected: </label>
                {selectedNames.map( n => (<button className={styles.selectedButton} key={n} onClick={deleteSelected}>{n}</button>))}
                </div>

                <button className={styles.sendButton} type="submit" name={'name'}>Send</button>

            </form>
            </div>
        </div>
    )
}

export default ActForm;
