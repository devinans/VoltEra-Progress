import React from 'react'
import './Rent.css'
import { assets } from '../../assets/assets'

const Rent = () => {
  return (
    <div className='rent'>
        <div className="rent-left">
            <img src={assets.rentcard1} alt="" className='card1'/>
        </div>
        <div className="rent-left">
            <img src={assets.rentcard2} alt="" className='card2'/>
        </div>
        <div className="rent-right">
            <h3>Yang Baru</h3>
            <h2>Sepeda Listrik Yang Disewakan</h2>
            <p>Jelajahi daerah wisata dengan cara yang ramah lingkungan dan 
                menyenangkan bersama kami. 
                Sewa sepeda listrik kami untuk pengalaman menjelajah 
                yang tak terlupakan.</p>
            <button>Selengkapnya</button>
        </div>
    </div>
  )
}

export default Rent