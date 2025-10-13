import React, { useEffect, useState } from 'react';

type ProductsModel = {
  id: number;
  name: string[];
  descrizione: string;
  prezzo: number;
};

const ProductsList: React.FC = () => {
  const [products, setUsers] = useState<ProductsModel[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella fetch');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Errore:', error));
  }, []);

  return (
    <div>
      <h2>Lista Prodotti</h2>
      {products.map(prod => (
        <div key={prod.id} style={{ border: '1px solid gray', margin: '8px', padding: '8px' }}>
          <p><strong>ID:</strong> {prod.id}</p>
          <p><strong>Names:</strong> {prod.name}</p>
          <p><strong>Descrizione:</strong> {prod.descrizione}</p>
          <p><strong>Prezzo:</strong> {prod.prezzo}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductsList;