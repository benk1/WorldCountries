import React from 'react'
const Countries = ({countriesData}) => {
  const countryList = countriesData.map((country) =>{
    return(
     <div className="row ">
    <div className="col s12 m6 l12">
      <div className="card white darken-1">
        <div className="card-content dark-text darken-2">
          <div className="countryFlag">
            <img src={country.flag} alt="country_flag"/>
          </div>
          <span className="card-title orange-text darken-2 center">{country.name}</span>
          <p> Capital: {country.capital}</p>
          <p> Languages Spoken: {country.languages} </p>
          <p> Population: {country.population} </p>
        </div>
        
      </div>
    </div>
  </div>
    )
  })
  return ( 
   <div className='grey darken-1 countryList'>
    {countryList}
   </div>
   );
}
 
export default Countries;