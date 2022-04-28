import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
    <div>
        <Link to = {'/'}>LandingPage</Link>
        <Link to = {'/home'}>Home</Link>
    </div>
    )
}

export default Nav;