import React, { Component } from 'react'
import './cardstyle.css'
import  Card  from '../Card/Card';
 class Cardcomp extends Component 
 {
   constructor(props)
   {
       super(props);
   }
    render() {
        return (
            <div className='card-list'>
          {this.props.mons.map(mon=> (<Card key={mon.id} mons={mon} />))}
            </div>
        )
    }
}

export default Cardcomp
