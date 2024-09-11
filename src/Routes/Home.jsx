import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    if (state.dentists.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          dispatch({ type: 'SET_DENTISTS', payload: response.data });
        })
        .catch(error => {
          console.error('Error fetching dentists:', error);
        });
    }
  });
  
  return (
    <div className="home-container">
      <h1>List of Dentists</h1>
      <div className="card-grid">
        {state.dentists.map(dentist => (
          <Card 
          key={dentist.id} 
          id={dentist.id} 
          name={dentist.name} 
          username={dentist.username} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home