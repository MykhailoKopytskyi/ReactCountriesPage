import React from 'react'

const ButtonPagination = (props) => {
  return (
    <div className='buttonPagination' >
      <button onClick={ (e) => props.setPageNumber(+e.target.innerText) } className={props.className} >{props.index}</button>
    </div>
  )
}

export default ButtonPagination
