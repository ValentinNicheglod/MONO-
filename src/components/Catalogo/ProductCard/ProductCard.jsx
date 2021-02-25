import React from "react";
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import "./ProductCard.css";

export const ProductCard = ({condition, currency, img, name, price, shipping, stock, total_price}) => {

    return(
        <div className="card mb-3 max-width">
            <div className="row no-gutters">

                <div className="col-md-4">
                    <img 
                        src={img} 
                        className="card-img" 
                        alt="product"
                    />
                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <div>
                            <h6 className="card-title">
                                {name}
                            </h6>
                            <hr/>
                        </div>
                        <h2 className="card-text">
                            <small>
                                {currency}
                            </small>
                            &nbsp;{price}
                        </h2>
                        <small>
                            Pagalo en
                            <span className="green">
                                <b>
                                    {` 6 cuotas de $${Math.round(total_price/6)}`}
                                </b>
                            </span>
                        </small>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text">
                                    {stock <= 0
                                    ? <b className= "red">
                                        <CloseIcon 
                                            fontSize= "small"
                                        />
                                        &nbsp;
                                        Fuera de stock
                                    </b>
                                    : <b className= "green">
                                        <CheckIcon 
                                            fontSize= "small"
                                        />
                                        &nbsp;
                                        En stock
                                    </b>
                                    }
                                    {stock === 1
                                    ? <small style={{color: "red"}}>&nbsp;(¡Último disponible!)</small>
                                    : <small>{` (${stock} disponibles)`}</small>
                                    }   
                                </p>                        
                            </div>
                            <div className="col-md-6 d-flex justify-content-end align-items-center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForwardOutlinedIcon/>}
                                >
                                    COMPRAR
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className= "col-md-2 d-flex flex-column align-items-center">
                    <Chip
                        label={condition}
                        color="primary"
                        className="chip"
                    />                    
                    {shipping !== null
                    ?<Chip
                        label={shipping}
                        color="secondary"
                        className="chip"
                    />
                    : null
                    }
                </div>

            </div>
        </div>

    );
};
