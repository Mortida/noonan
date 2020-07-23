import React from 'react';

const Search = ({ searchChange }) => {
  return (
    <div className='pa3'>
      <input 
      onChange={searchChange}
      className='pa2 ba b--none br2  bg-light-blue'
      type='search' 
      placeholder='Search' />
    </div>
  )
}
export default Search;