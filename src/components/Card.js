import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5' >
        <img style={{width: '280px', height:'476.83px'}} src={`/images/image${id}.jpg`} alt='' />
        <h4>{email}</h4>
        <p>{name}</p>
    </div>
  )
}

export default Card;