import React, { useState } from "react";
import { searchKeyword } from "../../api";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [keyword, setKeyword] = useState("");
    const [suggestions, setSuggestions] = useState(null);
    const navigate = useNavigate();

    async function getSuggestions() {
        const { data } = await searchKeyword(keyword);
        console.log(data);
        setSuggestions(data.bestMatches);
    }
    
    function handleChange(event){
        const value = event.target.value;
        setKeyword(value);
        getSuggestions();
    }

    function handleClick(event){
        console.log(event);
        navigate(`/card/${event.target.id}`);
    }

    return (
        <div className="searchbar">
            <input placeholder="Search" onChange={handleChange} value={keyword}></input>
            <div className="dropdown">
                {suggestions ? (suggestions.map((suggestion) => {
                    return (
                        <div className="entry" onClick={handleClick} id={suggestion["1. symbol"]}>
                            <p>{suggestion["2. name"]}</p>
                            <p>{suggestion["1. symbol"]}</p>
                        </div>
                    );
                })) 
                : null}
            </div>
        </div>
    );

}

export default SearchBar;