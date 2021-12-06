import React from 'react'

import './cardstyle1.css'
const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.mons.id+4}?set=set2`}/>
           <h1>{props.mons.name}</h1>
           <p>{props.mons.email}</p>
        </div>
    )
}



export default Card

