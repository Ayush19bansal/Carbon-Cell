import React from 'react'
import  { useEffect, useState } from 'react';
import axios from "axios"
import "./assets.css"
import Navigation_Bar from '../Navbar/Navigation_Bar';
import Navbar2 from "../NavBar2/Navbar2"

import { BsInfoCircle } from "react-icons/bs";

function Assets() {

    const [currency, setCurrency] = useState([]);

  const COLORS = ['#9FFF9D', '#2AB42A', '#03C3FF', '#1B9A59'];

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = response.data;
        // Extract the currency data from the API response
        const currencyData = Object.values(data.bpi).map(currency => ({
          name: currency.code,
          value: currency.rate_float,
          rate: currency.rate,
          Symbol:currency.symbol,
          description: currency.description,
        }));console.log(currencyData);
        setCurrency(currencyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getCurrency();
  }, []);

  return (
    <div className='assets'>
      
      <Navigation_Bar/>
      <Navbar2/>

      <div className='container-assets'>

      {currency.map((item,index)=>(
          <div className='ca'>
          <div className='circle'>
              <div className='log'style={{backgroundColor:`${COLORS[index % COLORS.length]}`}}><span dangerouslySetInnerHTML={{__html:item.Symbol}}/></div>
              <div className='text' style={{color:`${COLORS[index % COLORS.length]}`}}>{item.name}</div>
          </div>

          <p>{item.description}</p>

          <h4 style={{color:`${COLORS[index % COLORS.length]}`}}>Price :- {item.rate}</h4>
          <h4>FP :- {item.value}</h4>
          <div className='fl'>
          <BsInfoCircle />
          <button>Trade</button>
          </div>
      </div>
    )

    )}
      
      </div>
    </div>
  )
}

export default Assets
