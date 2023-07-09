import React from 'react';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

const SeparateCountry = (props) => {

  const {name} = useParams();
  console.log(name)
  console.log(props.countriesArray);
  let curCountry = props.countriesArray.find( (el) => el.name.official == name ? el : false )

  console.log(curCountry)

  if(props.loaded) {
  
  
  
    return (
      <div>
        <h2>Name: {curCountry.name.official}</h2>
        <h3>Capital: {curCountry.capital[0]}</h3>
        <div style={{width:'300px'}} >
        <img src={curCountry.flags.png} alt="" />
          </div>
        <p>Population: {curCountry.population}</p>
        <p><Link to={curCountry.maps.googleMaps}>Map Link</Link> </p>
      </div>
    )
  }
  else {
    return  <h1>Wait, countries are loading</h1>
  }

}

export default SeparateCountry
