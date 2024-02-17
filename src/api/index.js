import axios from "axios";

const API = axios.create({baseURL : "https://www.alphavantage.co"});

export const getGainersLosers = async() => {
    const data = await API.get('/query?function=TOP_GAINERS_LOSERS&apikey=B7ML5JW2GAH01Z3D');
    return data;
}

export const searchKeyword = async (keyword) => {
    const data = await API.get(`/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=B7ML5JW2GAH01Z3D`);
    return data
}

export const getCardDetails = async (id) => {
    const data = await API.get(`/query?function=OVERVIEW&symbol=${id}&apikey=B7ML5JW2GAH01Z3D`);
    console.log(data);
    return data;
}

export const currentPrice = async (symbol) => {
    const data = await API.get(`/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=B7ML5JW2GAH01Z3D`);
    console.log(data);
    return data;
}

