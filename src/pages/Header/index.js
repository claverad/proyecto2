import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

     render() { 
          return ( 
               <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                    <h1>
                         <Link to={'/'} className="text-light">Rick&Mortyapi</Link>
                    </h1>

                    <Link to={'/'} className="btn btn-danger nuevo-post">
                         Home
                    </Link>
                    <Link to={'/characters'} className="btn btn-danger nuevo-post">
                         Characters
                    </Link>
                    <Link to={'/episodes'} className="btn btn-danger nuevo-post">
                         Episodes
                    </Link>
                    
               </nav>
           );
     }
}
 
export default Header;