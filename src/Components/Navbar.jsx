import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  // Función para alternar entre light y dark
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      {/* Aquí agregamos los links correspondientes a las rutas definidas */}
      <ul>
        <li>
          <Link to="/">Inicio</Link> {/* Redirige a la ruta raíz "/" */}
        </li>
        <li>
          <Link to="/contacto">Contacto</Link> {/* Redirige a la ruta "/contacto" */}
        </li>
        <li>
          <Link to="/favs">Favoritos</Link> {/* Redirige a la ruta "/favs" */}
        </li>
      </ul>

      {/* Implementar la lógica para cambiar de tema con el botón */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
}

export default Navbar