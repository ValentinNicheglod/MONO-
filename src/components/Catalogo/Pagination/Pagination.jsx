import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Pagination = ({pagination}) => {

    const location = useLocation();
    let {filter, page, sort} = useParams();

    const keys = Object.getOwnPropertyNames(pagination);

    return(

        <nav aria-label="Page navigation example">
            <ul className="pagination">

                <li className="page-item">
                    <a 
                        className="page-link" 
                        href={`/search/${sort}/${parseInt(page) > 1 ? parseInt(page) -1 : parseInt(page)}${filter ? `/${filter}` : ""}${location.search}`}
                    >
                        Anterior
                    </a>
                </li>

                {keys && keys.map((e, i) =>
                    <li className="page-item" key={i}>
                        <a 
                            className="page-link" 
                            href={`/search/${sort}/${parseInt(e)}${filter ? `/${filter}` : ""}${location.search}`}
                        >
                            {e}
                        </a>
                    </li>    
                )}

                <li className="page-item">
                    <a 
                        className="page-link" 
                        href={`/search/${sort}/${parseInt(page) < keys.length ? parseInt(page) +1 : parseInt(page)}${filter ? `/${filter}` : ""}${location.search}`}
                    >
                        Siguiente
                    </a>
                </li>

            </ul>
        </nav>

    );
};
