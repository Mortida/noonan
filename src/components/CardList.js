import React from 'react';
import Card from './Card'

const CardList = ({user, result}) => {
  return (
    <div>
      {<h3 style={{color:'white'}}>Search result: &nbsp;
      <i style={{color:'#109dee', borderBottom:'4px double white'}}>
      {result}</i>
      </h3>}
      {
        user.map((u, i)=>{
          return (<Card 
          key={i}
          id={user[i].id}
          name={user[i].name}
          email={user[i].email}
          />
          )
        })
      }
    </div>  
  )
}
export default CardList;