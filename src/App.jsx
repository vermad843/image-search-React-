import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <h1>
          React Image App 
        </h1>
        <label htmlFor = "searchTerm"></label>
        <input 
         className = "u-full-width" 
         type = "text" 
         id = "searchTerm"   />
         <button type = "submit">Search</button>
      </div>
    );
  }
}

export default App;