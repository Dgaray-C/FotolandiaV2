import React from 'react'
import './CardWidget.css';

function CardWidget() {
  return (
    <div className='nav-link'>
        <img className='img-carrito' src="/src/assets/carrito.svg" alt="" />
        <span className="badge text-bg-danger">5</span>
        
    </div>
  )
}

export default CardWidget