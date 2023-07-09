import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Country = (props) => {
  return (
    <NavLink to={ `/${props.name}` } >
    <div className='country' >
      <h2>Name: {props.name}</h2>
      <h3>Capital: {props.capital}</h3>
      <div style={{width:'300px'}} >
      <img src={props.flag} alt="" />
        </div>
      <p>Population: {props.population}</p>
      <p><Link to={props.mapLink}>Map Link</Link> </p>
    </div>
    </NavLink>

  )
}

export default Country
