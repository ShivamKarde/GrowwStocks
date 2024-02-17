import React, { useEffect } from 'react'
import axios from 'axios';

const Temp = () => {
    const tempp = async() => {
        const API = axios.create({baseURL: 'https://www.alphavantage.co'})
        const response = await API.get('/query?function=TOP_GAINERS_LOSERS&apikey=demo')
        console.log(response)
    }
        tempp()
  return (
    <div>
    </div>
  )
}

export default Temp;
