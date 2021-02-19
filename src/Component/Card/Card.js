import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ({special,data})=>{ 
        
    return (
      <div className={`Card ${special?'Special':''}`} >
        <div className="Header">
            {data.title}
        </div>
        <div className="Details">
          <span className="Price">${data.price}/ <span className="Days">{data.days} days</span></span> 
          <p className="Description">{data.description}</p>
          <ul className="List">
            {data.list.map((element,index) => {
              return <li key={index}>{element}</li>
            })}
          </ul>
        </div>
        <div className="Footer">
          <Link to={`/payment/${data.title}`} className="Button">COMPRAR</Link>
        </div>
      </div>
    ) 
}

export default Card
