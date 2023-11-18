import { useState } from "react";
import CupcakeApi from "../api/api";
import { CupcakeInterface } from "../interfaces";
import { useNavigate } from "react-router-dom";

const defaultInitialFormData = {
  id: "",
  flavor: "",
  size: "",
  rating: "",
  image: "",
};

interface FormProps {
  initialFormData?: CupcakeInterface;
}

function Form({ initialFormData = defaultInitialFormData }: FormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (Number(initialFormData.id) > 0) {
      CupcakeApi.updateCupcake(initialFormData.id, formData);
    } else {
      CupcakeApi.createCupcake(formData);
      setFormData(initialFormData);
    }

    navigate("/cupcakes");
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-12 mt-[80px]">
          Fill out form to add a new cupcake!
        </h2>
        <div className="bg-pink-100 p-10 rounded-lg shadow-md md:w-3/4 lg:w-1/2 mx-auto">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 text-blue-400 font-bold" 
                htmlFor="flavor">
              Flavor
            </label>
            <input
                type="text"
              id="flavor"
              name="flavor"
              placeholder="Enter flavor..."
              value={formData.flavor}
              onChange={handleChange}
              className="border border-gray-300 shadow p-3 w-full rounded mb-5"
            />
            <label className="mb-2 font-bold text-blue-400" htmlFor="size">Size</label>
            <input
            type="text"
              id="size"
              name="size"
              placeholder="Enter size..."
              value={formData.size}
              onChange={handleChange}
              className="border border-gray-300 shadow p-3 w-full rounded mb-5"
            />
            <label className="mb-2 font-bold text-blue-400" htmlFor="rating">Rating</label>
            <input
            type="number"
              id="rating"
              name="rating"
              placeholder="Enter number 0 - 9"
              value={formData.rating}
              onChange={handleChange}
              className="border border-gray-300 shadow p-3 w-full rounded mb-5"
            />
            <label className="mb-2 font-bold text-blue-400" htmlFor="image">Image</label>
            <input
            type="text"
              id="image"
              name="image"
              placeholder="Enter image..."
              value={formData.image}
              onChange={handleChange}
              className="border border-gray-300 shadow p-3 w-full rounded mb-5"
            />
            <button type="submit" className="bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
