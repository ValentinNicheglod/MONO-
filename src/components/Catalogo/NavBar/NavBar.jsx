import React from "react";
import { Link } from "react-router-dom"

import { SearchBar } from "../../SearchBar/SearchBar";

import "./NavBar.css";

export const NavBar = () => {

    return(

        <div
            className="row"
            id="nav"
        >

            <div 
                className="col-md-1"
                id="icon"
            >
                <Link to="/"> {/* Link to main page | Link a pagina principal */}
                    <img 
                        className="icon"
                        src="/monkey-img.png"
                        width="80px"
                        height="80px"
                        alt="mono"
                    />                
                </Link>
            </div>
            
            <div className="col-md-3">
                <Link to="/"> {/* Link to main page | Link a pagina principal */}
                    <h1 id="navtitle">
                        MONO...
                    </h1>
                </Link>
            </div>

            <div className="col-md-4">
                <SearchBar />
            </div>

        </div>

    );
};
