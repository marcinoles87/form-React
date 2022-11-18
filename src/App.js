import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    username : '' ,
    email : ''
    } 

   handleOnChange = (e) => {
    console.log(e.target.type);


  const value = e.target.value;
  this.setState( {
    username : value ,
  } )
   }

  


  render() { 
    return (
     <div className='App'>
       <form>
        <label htmlFor='user'> 
          Twoje imie
          <input 
          type="text" 
          id="user" 
          name="username" 
          value={this.state.username}
          onChange={this.handleOnChange}
          ></input>
        </label>

        <label htmlFor='email'> 
          Twoj adres e-mail :
          <input 
          type="email" 
          id="email" 
          name="email" 
          value={this.state.username}
          onChange={this.handleOnChange}
          ></input>
        </label>

        <label htmlFor='trip'> 
          Wybierz wycieczke
          <input 
          type="text" 
          id="trip" 
          name="trip" 
          value={this.state.username}
          onChange={this.handleOnChange}
          ></input>
        </label>

       </form>
     </div>
    );
  }
}
 
export default App;

