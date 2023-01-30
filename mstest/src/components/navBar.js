// import React from 'react';
// import {FaBars,FaTimes} from 'react-icons/fa';
// import "../styles.css";

// export default function navBar(){
//     return <nav className="nav">
//         <a href="/" className="site-title"><h1>Recipe!</h1></a>
//         <ul>
//             <li>
//                 <a href="/About" className='about'>About</a>
//             </li>
//                 <li>
//                 <a href="/Recipes" className='recipes'>Recipes</a>
//                 </li>
//                     <li>
//                         <a href='/Reviews' className='reviews'> Reviews </a>
//                     </li>
//         </ul>
//         <button>
//             <FaBars/>
//         </button>
//     </nav>
// }
import { BrowserRouter as Router, 
    Link,
    Route } from 'react-router-dom'

import Recipes from '../views/Recipes'
import Home from '../views/Home'
import About from '../views/About'
import Reviews from '../views/Reviews'

export default function App () {
    return(
        <Router>
            <div className="navBar">
                <ul>
                    <li>
                     <Link to="/">Home</Link>
                    </li>
                    <li>
                     <Link to="/Recipes">Recipes</Link>
                    </li>
                    <li>
                     <Link to="/About">About Us</Link>
                    </li>
                    <li>
                     <Link to="/Reviews">Reviews</Link>
                    </li>

                </ul>
            </div>

            <div className="display">
                <Route path="/" component={Home} />
                <Route path="/aboutuspage" component={About} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/recipes" component={Recipes} />
            </div>
        </Router>
    )
}
