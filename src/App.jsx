import React, { Component } from 'react';
import API from './API';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : 'React Image Search',
     searchTerm : '',
    }
  }

  formSubmitted(event) {
    event.preventDefault();
    API.search(this.state.searchTerm)
    .then((images) => {
      console.log(images);     
    })
  }

  
  searchTermChanged(event) {
    this.setState({
     searchTerm : event.target.value
    });
    
  }
  render() {
    const {title , searchTerm } = this.state ;
    return (
      <div>
        <h1>
          {title} 
        </h1>
        <form onSubmit ={this.formSubmitted.bind(this)}>
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