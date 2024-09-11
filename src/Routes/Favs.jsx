import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Leemos los favoritos del localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favDentists")) || [];
    setFavorites(storedFavs);
  }, []);
  
  return (
    <div className="favs-container">
      <h1>Tus Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No tienes dentistas favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
