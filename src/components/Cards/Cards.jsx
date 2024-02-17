import React, {useState, useEffect} from "react";
import Card from "./Card/Card";
import { getGainersLosers } from "../../api";

function Cards(){
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getGainersLosers();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="cardscontainer">
            {data?
            (data.top_gainers.map((gainer)=>
            {
                return (<Card 
                    ticker={gainer.ticker} 
                    price={gainer.price} 
                    chnge={gainer.change_percentage}
                />);
            })
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}

export default Cards;