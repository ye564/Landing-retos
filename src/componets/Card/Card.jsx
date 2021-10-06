import React from 'react'

import './Card.css';

const Card = ({items}) => {

    
    return (
        <>
        <div className='card' key={items.id}>
            <h2>{items.title}</h2>
            <a href={items.url} target='_blank' rel="noreferrer">
            <img src={items.img} alt={items.title} /> 
            </a>

        </div>
        </>
    )
}

export default Card
