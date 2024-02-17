import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/card/${props.ticker}`);
    }
    
    return ( 
        <div className="card" onClick={handleClick}> 
                <p className="ticker">{props.ticker}</p>
                <p className="price">${props.price}</p>
                <p className="chnge">+{props.chnge}</p>
        </div>
    );
}

export default Card;