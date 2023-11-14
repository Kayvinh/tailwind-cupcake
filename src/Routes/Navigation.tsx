import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
        <nav>
            <NavLink className="navbar-brand" to="/">Cupcakes</NavLink>
            <ul>
                <li>
                    <NavLink to="/add">Add Cupcake</NavLink>
                </li>
                <li>
                    <NavLink to="/">Cupcakes</NavLink>
                </li>
            </ul>

        </nav>
    </div>
  )
}

export default Navigation