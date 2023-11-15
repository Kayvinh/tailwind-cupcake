import { useState, useEffect } from 'react';
import { CupcakeInterface } from '../interfaces';
import Cupcake from './Cupcake';
import CupcakeApi from '../api/api';

function CupcakeList() {
    const [cupcakes, setCupcakes] = useState<CupcakeInterface[] | null>(null);

    useEffect(function getAllCupcakesOnMount() {
      async function getAllCupcakes() {
        let response = await CupcakeApi.getCupcakes();
        setCupcakes(response);
      }
  
      getAllCupcakes();
    }, []);

    
    return (
        <div className="CupcakeList">
            {cupcakes ? (
                cupcakes.map((c) => (
                    <Cupcake 
                        key={c.id}
                        id={c.id}
                        flavor={c.flavor}
                        size={c.size}
                        rating={c.rating}
                        image={c.image}
                    />
                ))) : (
                    <p>Sorry, no results were found!</p>
                )
            }
        </div>
    )
}

export default CupcakeList