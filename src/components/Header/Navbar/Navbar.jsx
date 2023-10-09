import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="gap-24 flex ">
        <h2>Navbar</h2>
        <div className="flex gap-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    );
};

export default Navbar;