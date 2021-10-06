import React,{  useState } from 'react'
import logo from '../assest/logo.png'
import './Header.css'


const Header = () => {
    const [search, setSearch] = useState(false)
    const change = ()=>setSearch(!search)

   
    return (
        <>
        <header className="header">
            <img src={logo} alt="logo" />
            <i class="fas fa-search" onClick={change}></i>
        </header>
        <div className={search ? 'search active' : 'search'}>
            <input 
            type="search" placeholder='Ingrese el nombre del reto'
            // onChange={handleChange}
            />
        </div>
        </>
    )
}

export default Header
