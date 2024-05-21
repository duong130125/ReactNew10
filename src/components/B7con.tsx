import React, { memo } from 'react';
interface Product {
  id: number
  name: string
  price: number
  quantity: number
}
const B7con = memo(({ id, name, price, quantity }: Product) => {
  return (
    <div>
      <p>ID:{id}</p>
      <p>Name:{name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
});

export default B7con;
