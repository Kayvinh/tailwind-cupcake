import { useState } from 'react';
import CupcakeApi from '../api/api';

function Form() {
    const initialFormData = {
        flavor: "",
        size:"",
        rating: "",
        image:""
    }

    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        CupcakeApi.createCupcake(formData);
        setFormData(initialFormData);

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