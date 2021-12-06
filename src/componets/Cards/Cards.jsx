import React, { useContext } from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { contextProvider } from '../../context/context'


export const Cards = () => {
    const { retos, searchs } = useContext(contextProvider)
    return (

        <div className='contant-cards'>
            <h1>Retos JavaScript, HTML y CSS</h1>
            <div className='cards'>
                {
                    retos.filter(res => {
                        if (searchs === '') {
                            return res
                        } else if (res.title.toLowerCase().includes(searchs.toLowerCase())) {
                            return res
                        }
                    }).map(items => <Card items={items} key={items.id} />)
                }
            </div>
        </div>
    )

}


