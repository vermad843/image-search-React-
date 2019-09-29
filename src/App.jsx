import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';


class App extends Component {
  constructor() {
    super();
    this.state = {
     title : 'React Image Search',
     searchTerm : '' 
    }
  }

  
  searchTermChanged(event) {
    console.log(event.target.value);
    this.setState({
     searchTerm : event.target.value
    });
    
  }





  render() {
    const {title , searchTerm} = this.state ;
    return (
      <div>
        <h1>
          {title} 
        </h1>
        <form>
        <label htmlFor = "searchTerm"></label>
          <input 
            onChange = {this.searchTermChanged.bind(this)}
            value = {searchTerm}
            className = "u-full-width" 
            type = "text" 
            id = "searchTerm"   />
            <button type = "submit">Search</button>
         </form>
      </div>
    );
  }
}

export default App;