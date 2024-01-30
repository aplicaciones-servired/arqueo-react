/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../img/ganeJamundi.png";

function Navbar() {
  return (
    <div className=" bg-blue-700 flex justify-between  px-1 py-1  rounded-lg">
      <Link to="/">
        <img src={logoImage} alt="" className="w-30 h-20"/>
      </Link>

      <ul className="flex gap-x-1 mt-5">
        <li>
          <Link to="/" className="bg-white px-2 py-1 mt-2 uppercase ">CERRAR</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
