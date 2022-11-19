import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    username : '' ,
    email : '',
    trip : '' ,
    message : '' ,
    value2 : '' ,
    
    
    errors : {

    username :false ,
    email :false,
    trip :false ,
    message : false ,

    }
  }

    message = {
      username_incorrect : 'Nazwa musi byc dluzsza ... ' ,
      email_incorrect : 'brak @ w emailu',
      trip_incorrect : ' brak wybranej wycieczki'
    }

   handleOnChange = (e) => {
    console.log(e.target.type);
    
  const type = e.target.type;
  const value2 = e.target.value;

  
console.log(value2)

  if(type === "text" || type === "email"  || type === "trip" || type ==="message" ){
  console.log(type)
  const name = e.target.name ;
  const value = e.target.value;
  
  this.setState( {
    [name] : value  ,
    message : value2 ,
  
  } )
   }
  
  }

   handleSubmit = (e) => {
    e.preventDefault() 
    

    if(true) {
      this.setState({
      
          username : '' ,
          email : '',
          trip : '' ,
          message : '' ,
          value2 : '' ,
          
          
          
          errors : {
      
          username :false ,
          email :false,
          trip :false ,
          message : false ,
      
          }
      } )
    } 
    
   }

  


  render() { 
    return (
     <div className='App'>
     
       <form onSubmit={this.handleSubmit}>
       <h1> Formularz kontaktowy</h1>
        <label htmlFor='user'> 
          Twoje imie :
          <input 
          type="text" 
          id="user" 
          name="username" 
          value={this.state.username}
          onChange={this.handleOnChange}
          >

          </input>
          {this.state.errors.username && <span>{this.message.username_incorrect}</span>}
        </label>

        <label htmlFor='email'> 
          Twoj e-mail :
          <input 
          type="email" 
          id="email" 
          name="email" 
          value={this.state.mail}
          onChange={this.handleOnChange}
          ></input>
          {this.state.errors.email && <span>{this.message.email_incorrect}</span>}
        </label>

        <label htmlFor='trip'> 
          Twoja wycieczka :
          <input 
          type="text" 
          id="trip" 
          name="trip" 
          value={this.state.trip}
          onChange={this.handleOnChange}
          ></input>
          {this.state.errors.trip && <span>{this.message.trip_incorrect}</span>}
        </label>

         <h2> Wiadomosc</h2>
        <label htmlFor='message'> 
          
          <textarea
          type="text"
          name="message"
          id="message"
          
          placeholder="end me a message"
          value2={this.state.message}
          onChange={this.handleOnChange}
          >

          </textarea>

          
        </label>

        <button>Zapisz sie </button>

       </form>
     </div>
    );
  }
}
 
export default App;

