import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function Wallet() {
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
          rate: currency.rate
        }));console.log(currencyData);
        setCurrency(currencyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getCurrency();
  }, []);

  return (
    <div className='piechart'>
  

<PieChart  width={165} height={165}>
        <Pie
          data={currency}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {currency.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
          ))}
        </Pie>
      </PieChart>

      <div className='flex'>
        <div className='currency'>
        {currency.map((item,index)=>(
      <p key={index} style={{color:`${COLORS[index % COLORS.length]}`}} >{item.name}</p>
    )

    )}

        </div>

        <div className='price' >
         {currency.map((item,index)=>(
      <p key={index} style={{color:`${COLORS[index % COLORS.length]}`}} >{item.rate}</p>
    )

    )}
      </div>

      </div>
      
    </div>
  );
}

export default Wallet;
