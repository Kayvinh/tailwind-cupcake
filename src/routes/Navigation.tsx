import { NavLink } from "react-router-dom";
import { GiCancel, GiCupcake } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  function toggleNavbar() {
    setToggle(!toggle);
  }

  return (
    <nav className="flex mx-4 py-1 my-1 w-screen fixed top-0">
      <NavLink to="/"><GiCupcake className="text-5xl"/></NavLink>

      {/** When width >= 480, display*/}
      <ul className="hidden min-[480px]:flex w-screen justify-end text-2xl items-center">
        <li className="mx-2">
          <NavLink className="" to="/add">
            Add
          </NavLink>
        </li>
        <li className="mx-2 mr-10">
          <NavLink className="inline-block h-full" to="/cupcakes">Cupcakes</NavLink>
        </li>
      </ul>

      {/** When width < 480, display*/}
      <button
        className="min-[480px]:hidden w-full flex justify-end mr-3 text-5xl"
        onClick={toggleNavbar}
      >
        {toggle ? (
          <>
            <GiCancel className="mr-5" />
            <div
              className="p-6 absolute top-20 bg-blue-200 opacity-[0.80]  w-full h-[100vh] z-10"
            >
              <ul className="flex flex-col">
                <li className="my-4">
                  <NavLink to="/add">Add</NavLink>
                </li>
                <li className="my-4">
                  <NavLink to="/cupcakes">Cupcakes</NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <CiMenuFries className="mr-5"/>
        )}
      </button>
    </nav>
  );
}

export default Navigation;
