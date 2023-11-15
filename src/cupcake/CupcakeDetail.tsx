import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CupcakeInterface } from '../interfaces';
import CupcakeApi from '../api/api';
import Form from '../common/Form';

function CupcakeDetail() {
    const [cupcakeDetails, setCupcakeDetails] = useState<CupcakeInterface | null>(null);
    const [isEditing, setIsEditing] = useState(false);
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


    function toggleEdit() {
        setIsEditing(edit => !edit);
    }

    return (
        <div className='CupcakeDetail'>

            <div>
                {cupcakeDetails ? (
                    <div>   
                        <p>Flavor: {cupcakeDetails.flavor}, Size: {cupcakeDetails.size}, Rating: {cupcakeDetails.rating}</p>
                        <img src={cupcakeDetails.image} alt={`cupcake-${cupcakeDetails.size}-${cupcakeDetails.flavor}`}/>
                        <button onClick={toggleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>

                        {isEditing ? (<Form initialFormData={cupcakeDetails || undefined}/>) : null}
                    </div>
                ): (
                    <p>Sorry! cupcake not found.</p>
                )}
            </div>
            
        </div>
    );
}

export default CupcakeDetail;