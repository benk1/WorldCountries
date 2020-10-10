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
    console.log('TEXT',countries);
    const filteredCountryByName = countries.filter(c =>
      c.name.toLowerCase().startsWith(text)
    );
    
    return (
      <div className="container">
       <Header countries={countries}/>
       <SearchCountry  handleChange={this.handleChange}  />
       

        <p className='center orange-text darken-5'>Sum of Searched Country which starts with letter <b>{text}</b> is: {filteredCountryByName.length}</p>
        
        
       <Countries countries={filteredCountryByName}/>
       
      </div>
    );
  }
  }

export default App;
