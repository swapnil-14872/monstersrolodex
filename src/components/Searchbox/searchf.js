import './searchbox.css'
import React from 'react'


function Searchf({placeholder , handlechange})
 {
    return (
        <div>
             <input className='search' type='search' placeholder={placeholder}  onChange=
                  {handlechange}/>
        </div>
    )
}

export default Searchf
