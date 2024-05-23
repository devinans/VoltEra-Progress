import React from 'react'
import './Content.css'
import { assets } from '../../assets/assets'

const Content = () => {
  return (
    <div>
        <div className="content">
            <div className="content-left">
                <h3>Yang Baru</h3>
                <h2>Sewakan Sepedamu Di Sini!</h2>
                <p>Yuk manfaatkan sepedamu yang tak terpakai untuk disewakan ke orang lain, 
                    selain bermanfaat juga tetap dapat menghasilkan keuntungan.</p>
                <button>Selengkapnya</button>
            </div>
            <div className="content-right">
                <img src={assets.cImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Content