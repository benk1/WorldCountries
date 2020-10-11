import React, { Component } from 'react';

import {countriesData} from './data/countries'

import './App.css';
import Header from './components/Header';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';



class App extends Component {
  state = {
    text: "",
    countries: countriesData
  }

  handleChange =(e) =>{
    this.setState({
      text: e.target.value.toLowerCase()
    })
   }
  render(){ 
    const {text,countries} = this.state
    
    const filteredCountryByName = countries.filter(c =>
      c.name.toLowerCase().startsWith(text)
    );

    const hideDiv = !(text === '')?(
      (filteredCountryByName.length > 1)?(
        <p className='center orange-text darken-5'>{filteredCountryByName.length} Countries which starts with letter <b>{text}</b> </p>
     ):(
      <p className='center orange-text darken-5'>{filteredCountryByName.length} Country which starts with letter <b>{text}</b> </p> 
     )
   ):(null)
    
    return (
      <div className="container">
       <Header countries={countries}/>
       <SearchCountry  handleChange={this.handleChange}  />
       

       {hideDiv}
        
        
       <Countries countries={filteredCountryByName}/>
       
      </div>
    );
  }
  }

export default App;
