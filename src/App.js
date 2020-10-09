import React, { Component } from 'react';

import {countriesData} from './data/countries'

import './App.css';
import Header from './components/Header';
import Countries from './components/Countries';



class App extends Component {
  
  render(){
    //console.log(countriesData.length);
    
    return (
      <div className="container">
       <Header countriesData={countriesData}/>
       <Countries countriesData={countriesData}/>
        
       
      </div>
    );
  }
  }

export default App;
