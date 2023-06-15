import React from 'react';
import Country from './Country';

const Countries = (props) => {

  if(!props.loaded) {
    return 'The countries are loading'
  };

  const countries = [];
  const upperBoundary = props.pageNumber * props.pageAccumulates;
  const lowerBoundary = upperBoundary - props.pageAccumulates;


  for( let i = lowerBoundary; i < upperBoundary; i++ ) {
    if( !props.countriesArray[i] ) {  // Needed to print out the last countries !!!
      break
    }
    else {
      countries.push(props.countriesArray[i])
    }
  }


  return (
    <div>
      <h2>All Countries :</h2>

      <div className='countries' >
     {
      countries.map( (country, index) =>
       <Country
        name={country.name.official}
        capital={country.capital}
        flag={country.flags.png}
        population={country.population}
        mapLink={country.maps.googleMaps}
        key={index}
       /> 
       )
     }
    </div>
    </div>
    
  )
}

export default Countries
