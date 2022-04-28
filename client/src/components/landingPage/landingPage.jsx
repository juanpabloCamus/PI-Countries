import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    return(
        <div className="landing">
            <h1 className="h1">Welcome to Countries App</h1>,
            <button>
                <Link to = {'/home'}>Home</Link>
            </button>
        </div>
    )
}

export default LandingPage;