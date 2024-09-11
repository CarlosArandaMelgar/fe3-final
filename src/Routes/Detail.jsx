import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    // Hacemos la llamada a la API para obtener los detalles del dentista
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setDentist(response.data);
        setLoading(false); // Quitamos el estado de carga
      })
      .catch((error) => {
        setError("Error fetching dentist details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="dentist-detail">
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <div>
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Sitio Web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>No se encontró la información del dentista.</p>
      )}
    </div>
  );
}

export default Detail