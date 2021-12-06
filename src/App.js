import React ,{ Component } from 'react';
import './App.css';
import  Cardlist from './components/card-list/cardcomp';
import Searchf from './components/Searchbox/searchf';
class  App  extends Component
{
  constructor()
   {
     super();

     this.state=
     {
      mons :[],
      searchfield:''
     };

    //  this.handlechange=this.handlechange.bind(this);
   }
   componentDidMount()
   {
     fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json())
     .then(user=> this.setState({mons:user}))
   }
   handlechange=(e)=>
   {
   this.setState({searchfield: e.target.value})
   }
  render()
  {
    
    
    const {mons, searchfield}= this.state;

    const filteredmons= mons.filter( m => m.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
    <div className='App'>
      <h1> Monsters Exhibition </h1>
       <Searchf placeholder='Search Monsters' handlechange={this.handlechange}/>

       <Cardlist mons= {filteredmons} />
    </div>
    )
     
  };
}

export default App;
