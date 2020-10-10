import React from 'react'
const Header = ({countries}) => {
  
  return (
    <div className='grey lighten-5 container header'>
    <h1 className=' blue-text darken-54'>Get To Know World Countries </h1>
    <h5 className='orange-text darken-5 center'>At the moment we have {countries.length} Countries.</h5>
    </div>
  );
}
 
export default Header;