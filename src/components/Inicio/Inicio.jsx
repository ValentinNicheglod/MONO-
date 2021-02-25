import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Inicio.css";

export const Inicio = () => {

    return(

        <div 
            className="row"
            id="app"
        >

            <div className="col-md-1 color"></div>

            <div className="col-md-5 primero">
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
                    <div className="col-md-10">
        	            <SearchBar />
                    </div>  
                </div>   
            </div>

            <div className="col-md-6 primero">
                <img 
                    src="/monkey-img.png" 
                    alt="img" 
                    id="img"
                    draggable="false"
                />
            </div>

        </div>

    );
};
