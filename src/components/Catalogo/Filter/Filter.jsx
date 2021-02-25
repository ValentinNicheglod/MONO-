import React from "react";
import Chip from '@material-ui/core/Chip';
import { NavLink, useHistory, useParams } from "react-router-dom";

import "./Filter.css";

export const Filter = ({name, query}) => {

    let {filter, page, sort} = useParams();
    let history = useHistory();

    const handleDelete = () => {
        history.replace(`/search/${sort}/${page}${query}`) //Delete the param "filter" from URL | Elimina el param "filter" de la URL
    };
    
    return(

        <div id="filter" className="card">

            <h1>
                {name && name.split(" ")[0]}
            </h1>
            <hr/>
            {
                filter !== undefined //Shows only if a filter was selected | Se muestra solo si se seleccionó un filtro
                ? <>
                <div className="row">
                    <span className="col-md-7">
                        <b>Filtros seleccionados: &nbsp;</b>
                    </span>
                    <Chip
                        size="small"
                        label={filter.toUpperCase()}
                        onDelete={handleDelete}
                        color="primary"
                    />
                </div>
                <hr/>
                </>
                : null
            }

            <div className="row filter">
                <h5>
                    Ordenar publicaciones
                </h5>
                <NavLink 
                    to={`/search/destacados/1${filter ? "/" + filter : ""}${query}`} 
                    activeClassName="selected"
                >
                    Destacados
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/menor/${page}${filter ? "/" + filter : ""}${query}`} 
                    activeClassName="selected"
                >
                    Menor precio
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/mayor/${page}${filter ? "/" + filter : ""}${query}`} 
                    activeClassName="selected"
                >
                    Mayor precio
                </NavLink>
            </div>

            <hr/>

            <div className="row filter">
                <h5>
                    Condición
                </h5>
                <NavLink 
                    to={`/search/${sort}/${page}/nuevo${query}`} 
                    activeClassName="selected"
                >
                    Nuevo
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/${sort}/${page}/usado${query}`} 
                    activeClassName="selected"
                >
                    Usado
                </NavLink>
            </div>

            <hr/>

            <div className="row filter">
                <h5>
                    Envío
                </h5>
                <NavLink 
                    to={`/search/${sort}/${page}/envio gratis${query}`} 
                    activeClassName="selected"
                >
                    Envío gratis
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/${sort}/${page}/express${query}`} 
                    activeClassName="selected"
                >
                    Express {/* Express filter is non functional | El filtro express no es funcional*/}
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/${sort}/${page}/pick up${query}`} 
                    activeClassName="selected"
                >
                    Pick Up
                </NavLink>
            </div>

            <hr/>

            <div className="row filter">
                <h5>
                    Descuentos {/* All discounts filters are not functional | Todos los filtros de descuentos no son funcionales*/}
                </h5>
                <NavLink 
                    to={`/search/${sort}/${page}/descuento -10${query}`} 
                    activeClassName="selected"
                >
                    Menos de 10%
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/${sort}/${page}/desc. 10-20${query}`} 
                    activeClassName="selected"
                >
                    Entre 10% y 20%
                </NavLink>
                <br/>
                <NavLink 
                    to={`/search/${sort}/${page}/descuento +20${query}`} 
                    activeClassName="selected"
                >
                    Más de 20%
                </NavLink>
            </div>

        </div>

    );
};
