import React from 'react'
import logos from "../../assests/logo.png"
import ver from "../../assests/icon.png"

function CarbonCell() {
  return (
    <div className='carbon-cell'>
      <img src={logos} style={{width:"40px",height:"40px", borderRadius:"50%"}}></img>
      <div>
        <div className='name'>
        <h5>Carbon Cell</h5>
        <img src={ver} style={{backgroundColor:"black",width:"15px"}}></img>
        </div>
        <p>Introducing Carbon Cell</p>
        <p className='rem2'>
        Executive Summary Carbon Cell is building next generation financial solutions for carbon markets.
        </p>

        <p style={{marginTop:"10px"}}>Read more:  <a href="https://carboncell.medium.com/introducing-carbon-cell-d8b9dc18b6c7" target="_blank" rel="noopener noreferrer">Click Here </a></p>

        <p style={{marginTop:"10px"}} className='remove'>Therefore, Carbon Cell plans to solve that problem by giving organizations ....</p>
     
      </div>
    </div>
  )
}

export default CarbonCell
