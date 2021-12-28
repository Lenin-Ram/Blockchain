import React from 'react';
import {  Link } from "react-router-dom";

function navbar () {
  return (
  <div>
    <li>
      <Link to="/App">inicio</Link>
    </li>
    <li>
      <Link to="/formulario">Formulario</Link>
    </li>
    <li>
      <Link to="/Estadisitica">estadistica</Link>
    </li>
 
  </div>
  );
}
export default navbar;