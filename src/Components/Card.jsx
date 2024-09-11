import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context"; 

const Card = ({ name, username, id }) => {

  const { state } = useContext(ContextGlobal)

  const addFav = () => {
    const favDentists = JSON.parse(localStorage.getItem("favDentists")) || [];
    const newFav = { id, name, username }; // Información que queremos almacenar
    const alreadyExists = favDentists.some(dentist => dentist.id === id); // Verificamos si ya está agregado

    if (!alreadyExists) {
      localStorage.setItem("favDentists", JSON.stringify([...favDentists, newFav]));
      alert(`${name} agregado a favoritos`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      <h3>{name}</h3>
      <p>{username}</p>
      {/* Enlace a los detalles del dentista */}
      <Link to={`/dentista/${id}`} className="detail-link">Ver detalles</Link>
      {/* Botón para agregar a favoritos */}
      <button onClick={addFav} className="favButton">Add to fav</button>
    </div>
  );
};

export default Card;
