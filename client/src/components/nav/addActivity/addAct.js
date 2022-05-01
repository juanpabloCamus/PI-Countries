import React from "react";
import { Link } from "react-router-dom";
export function AddAct () {
    return(
        <Link to={'/addActivity'}>
            <div>
                <h3>addActivity</h3>
            </div>
        </Link>
    )
}

export default AddAct;