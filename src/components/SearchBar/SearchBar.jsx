import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SearchBar.css";

export const SearchBar = () => {

    const [search, setSearch] = useState();

    const history = useHistory();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.location.pathname === "/"
        ? history.push(`search/destacados/1?q=${search}`)
        : history.push(`?q=${search}`);
          window.location.reload();
    }

    return(

        <form onSubmit={handleSubmit}>
            <input
                className="form-control col-md-8 border border-danger"
                type="text"
                placeholder="Ingresa tu busqueda..."
                onChange={handleChange}
                autoComplete="off"
                id="input"
            />
            <input
                className="btn btn-outline-danger col-md-3"
                type="submit"
                id="button"
                value="Buscar"
            />
        </form>

    );
};
