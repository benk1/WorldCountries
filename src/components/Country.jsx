import React from 'react'
const Country = ({country}) => {
  //console.log('country',country.languages);
  const formatLanguage  = country.languages.length > 1 ? (
    country.languages.join(',')
  ):(country.languages)
  
  return ( 
   <div className="row ">
    <div className="col s12 m6 l12">
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