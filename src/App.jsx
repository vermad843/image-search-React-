import React, { Component } from 'react';
import API from './API';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : 'React Image Search',
     searchTerm : '',
     loading : false ,
     images : []                           
    };
  }

  formSubmitted(event) {           
    event.preventDefault();        //when user press the button then 
   this.setState({              
    loading : true,               //setState is used to update the state 
    images : []                   //when we search again something then clear the previous images only show new images.
   });
    API.search(this.state.searchTerm)
    .then(images => {
      this.setState({
        loading : false ,
       images
      });
    });
  }

  
  searchTermChanged(event) {
    this.setState({
     searchTerm : event.target.value                    //updating as the user type in the input box;
    });
    
  }
  render() {
    const {title , searchTerm, loading ,images } = this.state ;
         return (
      <div>
        <h1>
          {title} 
        </h1>
        <form onSubmit ={this.formSubmitted.bind(this)}>
        <label htmlFor = "searchTerm">Search Term</label>
          <input 
            onChange = {this.searchTermChanged.bind(this)}
            value = {searchTerm}
            className = "u-full-width" 
            type = "text" 
            id = "searchTerm" 
            name = "searchTerm"  />
            <button type = "submit">Search</button>
         </form>
         {loading ? <img src = "Blocks-1s-200px.gif" /> : '' }      
          <section className = "images">                        
             {images.map((image) => {
               return <img key ={image.id} alt ={image.description} src ={image.image_url[0]} />
             })}
          </section>
      </div>
    );
  }
}
export default App;



//using ternary operator to decide when to show the image or not and using key for identifying the image uniquely.