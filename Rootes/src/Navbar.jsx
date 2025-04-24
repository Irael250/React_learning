
import { Link } from "react-router-dom"
import { Router,Route,Routes } from "react-router-dom";

function Navbar(){



    return(

        <nav>

            <ul>
                <li> <Link className="link" to='/home'> Home</Link> </li>
                <li> <Link className="link" to='/forms'> forms</Link> </li>
                <li> <Link className="link" to='/Events'> Events</Link> </li>     
            </ul>

            </nav>
    );
}

export default Navbar