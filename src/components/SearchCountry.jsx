import React from 'react'

const SearchCountry = ({handleChange,text}) => {
  return ( 
    <div className="row input">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input
            onChange={handleChange}
            type="text"
            
            value={text}
            id='search'
            className='validate'
            
          />
          <label className="active" htmlFor="search">
            Search By Name
          </label>
        </div>
      </div>
   );
}
 
export default SearchCountry;
