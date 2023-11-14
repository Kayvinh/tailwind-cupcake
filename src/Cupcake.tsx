import React from 'react'
import { CupcakeInterface } from './interfaces'

function Cupcake({ id, flavor, size, rating, image }: CupcakeInterface) {
  return (
    <div className="Cupcake">
        <p>Flavor: {flavor}, Size: {size}, Rating: {rating}</p>
        <img src={image} alt={`cupcake-${size}-${flavor}`}/>
    </div>
  )
}

export default Cupcake