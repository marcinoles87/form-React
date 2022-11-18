import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    username : '' ,
    email : '',
    trip : '' ,
    } 

   handleOnChange = (e) => {
    console.log(e.target.type);

  const name = e.target.name ;
  const value = e.target.value;
  this.setState( {
    [name] : value 
    
  } )
   }

  


  render() { 
    return (
     <div className='App'>
     
       <form>
       <h1> Formularz kontaktowy</h1>
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
          value={this.state.mail}
          onChange={this.handleOnChange}
          ></input>
        </label>

        <label htmlFor='trip'> 
          Wybierz wycieczke
          <input 
          type="text" 
          id="trip" 
          name="trip" 
          value={this.state.trip}
          onChange={this.handleOnChange}
          ></input>
        </label>

        <label htmlFor='message'> 
          Wiadomosc
          <input 
          type="textarea" 
          id="message" 
          name="message" 
          value={this.state.message}
          onChange={this.handleOnChange}
          ></input>
        </label>

        

       </form>
     </div>
    );
  }
}
 
export default App;

