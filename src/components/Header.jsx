import React from 'react'
const Header = ({countriesData}) => {
  
  return (
    <div className='#F0F0F0 lighten-3 container'>
    <h1 className=' blue-text darken-54'>Get To Know World Countries </h1>
    <h5 className='orange-text darken-5 center'>At the moment we have {countriesData.length} Countries.</h5>
    </div>
  );
}
 
export default Header;