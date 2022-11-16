import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    username : '' ,
   } 

   handleOnChange = (e) => {
    console.log(e.target.type);

   }


  render() { 
    return (
     <div className='App'>
       <form>
        <label> twoje imie
          <input 
          type="text" 
          id="user" 
          name="username" 
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

