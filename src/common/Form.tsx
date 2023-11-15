import { useState } from 'react';
import CupcakeApi from '../api/api';
import { CupcakeInterface } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const defaultInitialFormData = {
    id: "",
    flavor: "",
    size:"",
    rating: "",
    image:""
}

interface FormProps {
    initialFormData?: CupcakeInterface;
}

function Form({ initialFormData = defaultInitialFormData }: FormProps) {
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();


    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();

        if(Number(initialFormData.id) > 0) {
            CupcakeApi.updateCupcake(initialFormData.id, formData)
        } else {
            CupcakeApi.createCupcake(formData);
            setFormData(initialFormData);
        }

        navigate("/cupcakes");
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        
        const {name, value} = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value,
        }));
    }

  return (
    <div>      
        <form onSubmit={handleSubmit}>
            <label htmlFor="flavor">Flavor</label>
            <input
                name="flavor"
                placeholder="Enter flavor..."
                value={formData.flavor}
                onChange={handleChange}
            />
            <label htmlFor="size">Size</label>
            <input
                name="size"
                placeholder="Enter size..."
                value={formData.size}
                onChange={handleChange}
            />
            <label htmlFor="rating">Rating</label>
            <input
                name="rating"
                placeholder="Enter number..."
                value={formData.rating}
                onChange={handleChange}
            />
            <label htmlFor="image">Image</label>
            <input
                name="image"
                placeholder="Enter image..."
                value={formData.image}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
  </div>
  )
}

export default Form