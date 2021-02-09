import React, { useEffect, useState } from 'react';
import './Cards.scss';

import { Card } from '../Card/Card';
import { getProducts } from '../../api/api';

export const Cards = () => {
  const [ products, setProducts ] = useState([]);

  useEffect( async() => {
    const productsFromServer = await getProducts();

    console.log(productsFromServer);
    setProducts(productsFromServer);
  }, []);

  return (
    <section className="Cards">
      {
        products.map((product, index) => (
          <Card
            // there are no ids :((
            key={index}
            product={product}
          />
        ))
      }
    </section>
  )
}
