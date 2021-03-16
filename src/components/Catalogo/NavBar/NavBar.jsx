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
                className="col-md-1 col-sm-1 col-1"
                id="icon"
            >
                <Link to="/"> {/* Link to main page | Link a pagina principal */}
                    <img 
                        className="icon"
                        src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58433/monkey-emoji-clipart-xl.png"
                        width="80px"
                        height="80px"
                        alt="mono"
                    />                
                </Link>
            </div>
            
            <div className="col-md-3 col-sm-5 col-5">
                <Link to="/"> {/* Link to main page | Link a pagina principal */}
                    <h1 id="navtitle">
                        MONO...
                    </h1>
                </Link>
            </div>

            <div className="col-md-4 col-sm-6 col-6">
                <SearchBar />
            </div>

        </div>

    );
};
