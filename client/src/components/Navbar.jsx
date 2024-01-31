/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../img/ganeJamundi.png";

function Navbar() {
  return (
    <nav className="bg-blue-700 flex justify-around items-center py-2 rounded-lg">
      <ul className="flex items-center justify-center">
        <Link to="/">
          <img src={logoImage} width={110} alt="logo Servired" />
        </Link>
      </ul>

      <ul className="flex">
        <li>
          <Link to="/" className="bg-white  text-lg font-semibold p-2 px-4 rounded-md hover:bg-red-200">Cerrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
