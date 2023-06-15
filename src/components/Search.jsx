import React from 'react';
import Country from './Country';

const Search = (props) => {

  function controlUserCountry(e) {
    props.setSearchValue(e.target.value);
    

  }


  function printUserCountry() {
    const countriesArray = [];
    
    props.countriesArray.forEach( el => {
      const countryCommonName = el.name.common.toLowerCase();
      const countryOficialName = el.name.official.toLowerCase();
      const userInput = props.searchValue.trim().toLowerCase();
      if(!userInput) {
        return false;
      }


      if( countryCommonName.match(userInput) || countryOficialName.match(userInput) ) {
        countriesArray.push(el)
      }
    } )
    return countriesArray;
  }
  



  return (
    <div className="header">
      <div className='search' >
        <h2>You can search for your country: </h2>
        <input type="text" value={props.searchValue} onChange={ (e) => controlUserCountry(e) } />
      </div>

      <div className="grid">
      {printUserCountry().map( (country, index) => 
     <Country
     name={country.name.official}
     capital={country.capital}
     flag={null}
     population={country.population}
     mapLink={country.maps.googleMaps}
     key={index}
    /> 
    )}
      </div>

    


    </div>
    
  )
}

export default Search
