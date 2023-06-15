import React from 'react'

const Country = (props) => {
  return (
    <div className='country' >
      <h2>Name: {props.name}</h2>
      <h3>Capital: {props.capital}</h3>
      <div style={{width:'300px'}} >
      <img src={props.flag} alt="" />
        </div>
      <p>Population: {props.population}</p>
      <p><a href={props.mapLink}>Map Link</a> </p>
    </div>
  )
}

export default Country
