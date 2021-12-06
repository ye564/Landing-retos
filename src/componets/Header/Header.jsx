import React, { useContext, useState } from 'react'
import { contextProvider } from '../../context/context'
import logo from '../assest/logo.png'
import './Header.css'


const Header = () => {
    const [search, setSearch] = useState(false)
    const change = () => setSearch(!search)
    const { setSearchs } = useContext(contextProvider)
    return (
        <>
            <header className="header">
                <img src={logo} alt="logo" />
                <i className="fas fa-search" onClick={change}></i>
            </header>
            <div className={search ? 'search active' : 'search'}>
                <input
                    type="search" placeholder='Ingrese el nombre del reto'
                    onChange={e => { setSearchs(e.target.value) }}
                />
            </div>
        </>
    )
}

export default Header
