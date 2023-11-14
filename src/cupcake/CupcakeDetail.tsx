import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CupcakeInterface } from '../interfaces';
import CupcakeApi from '../api/api';

function CupcakeDetail() {
    const [cupcakeDetails, setCupcakeDetails] = useState<CupcakeInterface | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(function getCupcakeOnMount() {
        async function getCupcake(id?: string) {
            let cupcake = await CupcakeApi.getCupcake(id);
            setCupcakeDetails(cupcake);
        }

        getCupcake(id);
    }, [id]);


    async function handleDelete(evt: React.MouseEvent<HTMLButtonElement>): Promise<void> {
        await CupcakeApi.deleteCupcake(id);
        navigate("/cupcakes");
    }

    return (
        <div className='CupcakeDetail'>
                {cupcakeDetails ? (
                    <div>   
                        <p>Flavor: {cupcakeDetails.flavor}, Size: {cupcakeDetails.size}, Rating: {cupcakeDetails.rating}</p>
                        <img src={cupcakeDetails.image} alt={`cupcake-${cupcakeDetails.size}-${cupcakeDetails.flavor}`}/>
                        <button>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                ): (
                    <p>Sorry! cupcake not found.</p>
                )}
        </div>
    );
}

export default CupcakeDetail;