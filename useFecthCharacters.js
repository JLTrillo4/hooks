import { useState, useEffect } from 'react';

const useFetchCharacter = (url) => {
  const [data, setData] = useState(null);  // Para almacenar los datos obtenidos
  const [loading, setLoading] = useState(true);  // Para manejar el estado de carga
  const [error, setError] = useState(null);  // Para manejar errores

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Error fetching data');
        }
        const result = await response.json();
        setData(result);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    fetchData();
  }, [url]);  // Se ejecuta cada vez que cambia el `url`

return { data, loading, error };
};

export default useFetchCharacter;