import React from "react";

import {ProductCard} from "../ProductCard/ProductCard";

export const Results = ({products}) => {

    return(
        <div>
            {products && products.length === 0
            ?   <div className="d-flex flex-column align-items-center">
                    <img src="/no-see-monkey.png" alt="logo" width="500" heigth="500" className="row"/>
                    <br/>
                    <h3 className="row">
                        No encontramos ningún resultado
                    </h3>
                    <br/>
                    <h6 className="row">
                        Intenta utilizar otros filtros o realizar una nueva busqueda
                    </h6>
                </div>
            : products && products.map(e => (
                <ProductCard
                    key={e.id}
                    name= {e.title}
                    currency= {e.currency_id}
                    price= {e.price}
                    total_price= {e.total_price}
                    condition= {e.condition === "new" ? "NUEVO" : "USADO"}
                    shipping= {e.shipping.free === true ? "ENVÍO GRATIS" : null}
                    stock= {e.available_quantity}
                    img={e.thumbnail}
                />
            ))}
        </div>
    );
};
