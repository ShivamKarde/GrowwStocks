import React, {useEffect, useState} from "react";
import { getCardDetails, currentPrice } from "../../api";
import { useParams, useHistory } from 'react-router-dom';


function CardDetails(){
    const [details, setDetails] = useState(null);
    const [metrics, setMetrics] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getPrice(symbol) {
            const response = await currentPrice(symbol);
            setMetrics(response.data["Global Quote"]);
            console.log(response.data["Global Quote"]);
        }
        async function getDetails(id) {
            const response = await getCardDetails(id);
            setDetails(response.data);
            console.log(response.data);
            getPrice(response.data.Symbol);
        }
        getDetails(id);
    },[id])
    

    return (
        <div className="details">
            {details ? (
                <div>
                    <div className="maindetails">
                        <div className="logoname">
                            <p>{details.Name}</p>
                            <p>{details.Symbol}, {details.AssetType}</p>
                            <p>{details.Exchange}</p>
                        </div>
                        <div className="pricechnge">
                            {metrics ? (
                                <div>
                                    <p>{metrics["05. price"]}</p>
                                    <p>{metrics["09. change"]}</p>
                                </div>
                            ): 
                            <p>Loading</p>}
                        </div>  
                    </div>

                    <div className="about">
                        <p className="aboutheading">About {details.Name}</p>
                        <div className="line"></div>
                        <p className="aboutdesc">
                            {details.Description}
                        </p>
                    </div>
                    <div className="figurecontainer">
                        {}
                    </div>

                </div>
            ) : <p>Loading</p>}
        </div>
    );

}

export default CardDetails;