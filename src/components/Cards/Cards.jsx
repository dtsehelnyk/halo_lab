import React, { memo } from 'react';
import './Cards.scss';

import { Card } from '../Card/Card';

export const Cards = React.memo(
  ({ openModal, products }) =>  (
    <section className="Cards">
      {
        products.map((product, index) => (
          <Card
            // there are no ids :((
            key={index}
            product={product}
            openModal={openModal}
          />
        ))
      }
    </section>
  )
)
