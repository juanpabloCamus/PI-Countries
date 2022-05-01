import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addActivity} from "../../redux/actions/actions";
import './activityForm.css'

export function ActForm (){

    const dispatch = useDispatch();

    let [activity, setActivity] = useState({
       name: '',
       difficulty: 0,
       duration: 0,
       season: '',
       cId: ''
    });

    function handleChange(e){
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(activity);
        dispatch(addActivity(activity))
    }
    

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name={'name'} placeholder="name" onChange={handleChange}></input>
                <input type="number" name={'difficulty'} onChange={handleChange} ></input>
                <input type='time' name={'duration'} onChange={handleChange} ></input>
                <input type='text' placeholder="season" name={'season'} onChange={handleChange} ></input>
                <input type='text' placeholder="idC" name={'cId'} onChange={handleChange} ></input>
                <button type="submit" className="addButton" name={'name'} onChange={handleChange}>Enviar</button>
            </form>
        </div>
    )
}


export default ActForm;