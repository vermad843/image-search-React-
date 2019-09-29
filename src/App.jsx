import React, { Component } from 'react';
import API from './API';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : 'React Image Search',
     searchTerm : '',
     loading : false 
    }
  }

  formSubmitted(event) {
    event.preventDefault();

   this.setState({
    loading : true
   });

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
    const {title , searchTerm, loading  } = this.state ;
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
         {loading ? <img src = "Blocks-1s-200px.gif" /> : '' }
      </div>
    );
  }
}
export default App;