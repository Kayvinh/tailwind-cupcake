import React from 'react'
import { CupcakeInterface } from '../interfaces'
import { Link } from 'react-router-dom'

function Cupcake({ id, flavor, size, rating, image }: CupcakeInterface) {
  return (
    <div className="Cupcake">
      <Link to={`/cupcakes/${id}`}>
        <p>Flavor: {flavor}, Size: {size}, Rating: {rating}</p>
        <img src={image} alt={`cupcake-${size}-${flavor}`}/>
      </Link>
    </div>
  )
}

export default Cupcake