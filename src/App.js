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

  handleChange =(e) =>{
    this.setState({
      text: e.target.value.toLowerCase()
    })
   }

   handleSort = (path) =>{
     const sortColumn = {...this.state.sortColumn}
     if(sortColumn.path === path)
     sortColumn.order = (sortColumn.order ==='asc') ? 'desc': 'asc'
     else{
       sortColumn.path = path;
       sortColumn.order = 'asc';
     }
     this.setState({
       sortColumn
     })
   }

   sortByNameAsc = () =>{
     const sortedCountryName = this.state.countries.sort((a,b) =>{
       if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
       if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
       else return 0
     })
     this.setState({
       countries: sortedCountryName
     })
    }
       sortByNameDesc =() =>{
        const sortedCountryName = this.state.countries.sort((a,b) =>{
          if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
          if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
          else return 0
        })
        this.setState({
          countries: sortedCountryName.reverse()
        })
       }

       sortByCapitalAsc = () =>{
        const sortedCapital= this.state.countries.sort((a,b) =>{
          if(a.capital.toLocaleLowerCase() < b.capital.toLocaleLowerCase()) return -1
          if(a.capital.toLocaleLowerCase() > b.capital.toLocaleLowerCase()) return 1
          else return 0
        })
        this.setState({
          countries: sortedCapital
        })
       }

       sortByCapitalDesc =() =>{
        const sortedCapital= this.state.countries.sort((a,b) =>{
          if(a.capital.toLocaleLowerCase() < b.capital.toLocaleLowerCase()) return -1
          if(a.capital.toLocaleLowerCase() > b.capital.toLocaleLowerCase()) return 1
          else return 0
        })
        this.setState({
          countries: sortedCapital.reverse()
        })
       }

       sortedPopulationAsc = () =>{
         const sortedPopulation = this.state.countries.sort((a,b) =>
           Number(a.population) - Number(b.population))
           this.setState({
             countries: sortedPopulation
           })
         
       }

       sortedPopulationDesc = () =>{
        const sortedPopulation = this.state.countries.sort((a,b) =>
          Number(a.population) - Number(b.population))
          this.setState({
            countries: sortedPopulation.reverse()
          })
        
      }
  render(){ 
    const {text,countries,sortColumn} = this.state
    
    const filteredCountryByName = countries.filter(c =>
      c.name.toLowerCase().startsWith(text)
    );

   const sorted = _.orderBy(filteredCountryByName,[sortColumn.path],[sortColumn.order])

    const hideDiv = !(text === '')?(
      (filteredCountryByName.length > 1)?(
        <p className='center orange-text darken-5'>{filteredCountryByName.length} Countries found which starts with letter <b>{text}</b> </p>
     ):(
      <p className='center orange-text darken-5'>{filteredCountryByName.length} Country found which starts with letter <b>{text}</b> </p> 
     )
   ):(null)
    
    return (
      <div className="container">
       <Header countries={countries}/>
       <SearchCountry  handleChange={this.handleChange}  />
       <SortBy sortByNameAsc={this.sortByNameAsc} sortByNameDesc={this.sortByNameDesc} sortByCapitalAsc={this.sortByCapitalAsc} sortByCapitalDesc={this.sortByCapitalDesc} sortedPopulationAsc={this.sortedPopulationAsc} sortedPopulationDesc={this.sortedPopulationDesc}/>
  
       {hideDiv}
        
        
       <Countries countries={filteredCountryByName}/>
       
      </div>
    );
  }
  }

export default App;
