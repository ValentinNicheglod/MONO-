import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Inicio.css";

export const Inicio = () => {

    const smallWidth = window.screen.width < 600
    
    return(

        <div 
            className="row main-p"
            style={{height: window.innerHeight}}
        >

            <div className="col-md-1 col-sm-2 col-2 color"/>

            <div className="col-md-5 col-sm-10 col-10 primero">
                <div className="row">
                    <div 
                        className="col-md-12" 
                        id="wild"
                    >
                        <h1 id="title">
                            <span>
                                BE WILD
                                <span className="mono">
                                    ,
                                </span> 
                            </span>
                            <br/>
                            BE BOLD
                            <span className="mono">
                                ,
                            </span>
                            <hr id="hr"/>
                            FEEL
                            &nbsp;
                            <span className="mono">
                                MONO... 
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 col-sm-10 col-10">
        	            <SearchBar />
                    </div>  
                </div>   
            </div>

            {
                !smallWidth &&
                    <div className="col-md-6 monkey-img primero">
                        <img 
                            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58433/monkey-emoji-clipart-xl.png" 
                            alt="img" 
                            id="img"
                            draggable="false" 
                        />
                    </div>
            }   

        </div>

    );
};
