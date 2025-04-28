import React from 'react';
import useFetchCharacter from './hooks/useFetchCharacter';
import './App.css';

function App() {
  const { data, loading, error } = useFetchCharacter('https://rickandmortyapi.com/api/character/1'); // Ejemplo de URL

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Personaje</h1>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.status}</p>
          <img src={data.image} alt={data.name} />
        </div>
      )}
    </div>
  );
}

export default App;