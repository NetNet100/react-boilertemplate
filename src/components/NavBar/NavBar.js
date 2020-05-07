import React from "react";
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <ul>
                <li> <Link to="/Grid1" >Grid 1</Link></li>
                <li><Link to="/Grid2" >Grid 2</Link></li>
                <li><Link to="/Grid3" >Grid 3</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;