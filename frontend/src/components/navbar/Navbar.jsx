import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("beranda");
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);
 
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbarMenu">
            <li onClick={()=>setMenu("Beranda")} className={menu ==="Beranda"?"active":""}>Beranda</li>
            <li onClick={()=>setMenu("Sewa")} className={menu ==="Sewa"?"active":""}>Sewa</li>
            <li onClick={()=>setMenu("Tempat Wisata")} className={menu ==="Tempat Wisata"?"active":""}>Tempat Wisata</li>
            <li onClick={()=>setMenu("Blog")} className={menu ==="Blog"?"active":""}>Blog</li>
            <li onClick={()=>setMenu("Tentang Kami")} className={menu ==="Tentang Kami"?"active":""}>Tentang Kami</li>
            <li onClick={()=>setMenu("Kontak")} className={menu ==="Kontak"?"active":""}>Kontak</li>
        </ul>
        <div className="navbarRight">
            <img src={assets.account} alt="" />
        </div>
    </div>
  )
}

export default Navbar