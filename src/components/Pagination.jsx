import React from 'react'
import ButtonPagination from './ButtonPagination';

const Pagination = (props) => {
  const buttons = [];
  const numberOfPages = Math.ceil(props.countriesArrayLength / props.pageAccumulates);

  for( let i = 1; i <= numberOfPages; i++ ) {
    if( props.pageNumber == i ) {
    buttons.push( <ButtonPagination 
      key={i } 
      index={i} 
      setPageNumber={props.setPageNumber}
      className={'active'}  
      /> )
      
    }
    else {
      buttons.push( <ButtonPagination 
        key={i } 
        index={i} 
        setPageNumber={props.setPageNumber}
        className={''}  
        /> )

    }
  }


  

  return (
    <div className='pagination-wrapper' >
    <div className='pagination' >
      {buttons.map( btn => btn )}
    </div>
    </div>
  )
}

export default Pagination
