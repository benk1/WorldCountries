import React, { Component } from 'react';

import {countriesData} from './data/countries'

import './App.css';
import Header from './components/Header';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';
import _ from 'lodash'
import SortBy from './components/SortBy';

class App extends Component {
  state = {
    text: "",
    countries: countriesData,
    sortColumn: {path: 'name',order: 'asc'}
  }

  handleSort =(sortColumn) =>{
    this.setState({
      sortColumn
    })
  }

  handleChange =(e) =>{
    const {value} = e.target
    this.setState({
      text: value.toLowerCase()
    })
   }
   
  render(){ 
    const {text,countries,sortColumn} = this.state
    
    const filteredCountryByName = countries.filter(c =>
      c.name.toLowerCase().startsWith(text)
    );

   const sorted = _.orderBy(filteredCountryByName,[sortColumn.path],[sortColumn.order])

    const hideDiv = !(text === '')?(
      (sorted.length > 1)?(
        <p className='center  orange-text darken-5'>{sorted.length} Countries found which starts with letter <b className='black-text'>{text}</b> </p>
     ):(
      <p className='center  orange-text darken-5'>{sorted.length} Country found which starts with letter <b className='black-text'>{text}</b> </p> 
     )
   ):(null)
    
    return (
      <div className="container">
       <Header countries={countries}/>
       {hideDiv}
       <SearchCountry  handleChange={this.handleChange}  />
       <SortBy sortColumn={sortColumn} onSort={this.handleSort} onRenderSortIcon={this.renderSortIcon} />
  
        
        
       <Countries countries={sorted}/>
       
      </div>
    );
  }
  }

export default App;

