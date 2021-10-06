import React from 'react'
import Card from '../Card/Card'
import Challenge from '../../Challenges.json'
import './Cards.css'


export const Cards = () => {
   
   
    return (
        
        <div className='contant-cards'>
            <h1>Retos JavaScript, HTML y CSS</h1>
        <div className='cards'>
            {
                
                Challenge.map(items=> <Card items={items} key={items.id} />)}
            
        </div>
    </div>
    )

}


