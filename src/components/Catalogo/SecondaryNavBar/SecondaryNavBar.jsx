import React from 'react'
import { useParams } from "react-router-dom";

import "./SecondaryNavBar.css"; 

const SecondaryNavBar = ({name, setOpen}) => {

    let {filter} = useParams();

    return (
        <div className="sec-nav row px-3">
            <div className="col-sm-6 d-flex align-items-center">
                <h5 className="display-5">
                    {name}
                </h5>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-end">
                <button 
                    className="btn filter-btn"
                    onClick={() => setOpen(true)}
                >
                    Filtrar &nbsp;
                </button>
                {
                    filter && 
                    <small>
                        {` (un filtro seleccionado)`}   
                    </small>
                }
            </div>
        </div>
    )
}

export default SecondaryNavBar;
