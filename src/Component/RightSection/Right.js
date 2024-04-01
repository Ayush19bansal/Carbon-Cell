import React from 'react'
import "./Right.css"
import Graph from '../Graph'
import Wallet from '../Wallet'
import CarbonCell from '../CarbonCell/CarbonCell'
import metao from "../../assests/metao.jpg"
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios"
import  { useEffect, useState } from 'react';
import "../Assets/assets.css"

function Right() {

  const navigate = useNavigate();

  function go(){
    navigate("/wallet")
  }
  function goo(){
    navigate("/assets")
  }

  //for assets part
  const [currency, setCurrency] = useState([]);

  const COLORS = ['#9FFF9D', '#2AB42A', '#03C3FF', '#1B9A59'];

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.data;
        // Extract the currency data from the API response
        const currencyData = Object.values(data.bpi).map(currency => ({
          name: currency.code,
          Symbol:currency.symbol,
          value: currency.rate_float,
          rate: currency.rate,
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
    <div className='maincontainer'>

      <div className='uppersection'>
       <div>
       <h2>Hello, <span>Brooklyn Simmons👋</span></h2>
       <h3>Welcome to <span>Spot trading !</span></h3>
       </div>
       <div>
        <button>Start Trading</button>
       </div>
      </div>

     <div className='graph_wallet'>

    <div className='dono'>
    <div className='graph'>
        <h3 className='graphh1'>United States</h3>
        <hr></hr>
        <div className='contt'>
        <Graph/>
        </div>
      </div>

      <div className='wallet'>
        <h3 className='graphh1'>Cryptocurrency Prices</h3>
        <hr></hr>
        {/* <h3 className='graphh1'>United States</h3> */}
       <div className='cont'>
       <Wallet/>
       </div>
      </div>
    </div>

      <div className='optional'>
        <h3 className='graphh1'>In recent posts</h3>
        <hr></hr>
        <div className='conttt'>
        <CarbonCell/>
        </div>
      </div>

     </div>

     <div className='belowpart'>
     <div className='metacard'>
        <h3 className='graphh1'>MetaMask Wallet</h3>
        <hr></hr>
        <div className='contttt'>
        <img src={metao}></img>
        <button onClick={go}>Activate</button>
        </div>
      </div>

      <div className='assetspart'>
     {/* <button className='bt' onClick={goo}> Assets</button> */}

{currency.map((item,index)=>(
    <div className='caa'>
    <div className='circle'>
        <div className='log'style={{backgroundColor:`${COLORS[index % COLORS.length]}`}}><span dangerouslySetInnerHTML={{__html:item.Symbol}}/></div>
        <div className='text' style={{color:`${COLORS[index % COLORS.length]}`}}>{item.name}</div>
    </div>

    <p>{item.description}</p>

    <h4 style={{color:`${COLORS[index % COLORS.length]}`}}>Price :- {item.rate}</h4>
    <h4>FP :- {item.value}</h4>
    <div className='fll'>
    <BsInfoCircle />
    <button>Trade</button>
    </div>
</div>
)

)}

</div>

      </div>
     </div>
    
  )
}

export default Right
