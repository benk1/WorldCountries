import React from 'react'
const Country = ({country}) => {
  /*const formatLanguage  = languages.length > 1 ? (
    languages.join(',')
    ):(languages)*/
    const formatLanguage = country.languages.map((c) => (c.length > 1) ? (c.name):(c.name)).join(',')
    
    //console.log(country.languages.map(c => c));
  
  return ( 
   <div className="row ">
    <div className="col s12 m12 l12 ">
      <div className="card white lighten-5">
        <div className="card-content dark-text darken-2">
          <div className="countryFlag">
            <img src={country.flag} alt="country_flag"/>
          </div>
          <span className="card-title orange-text darken-2 center">{country.name}</span>
          <p> <b>Capital</b>: {country.capital}</p>
          <p> <b>Languages Spoken</b>: {formatLanguage} </p>
          <p> <b>Population</b>: {country.population} </p>
        </div>
        
      </div>
    </div>
  </div>
   );
}
 
export default Country;