import React from 'react'
import { assets } from '../../assets/assets'
import './Compo.css'

const Compo = () => {
  return (
    <div className='component'>
        <div className="compo-text">
            <h1>Mengapa VoltEra?</h1>
        </div>
        <div className="compo-content1">
            <div>
                <img src={assets.comp1} alt="" />
                <img src={assets.comp2} alt="" />
                <img src={assets.comp3} alt="" />
            </div>
        </div>
        <div className="compo-content2">
            <div>
                <img src={assets.comp4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Compo