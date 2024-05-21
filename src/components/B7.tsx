import React, { useMemo, useState } from 'react'
import B7con from './B7con'
interface Product {
    id: number
    name: string
    price: number
    quantity: number
}
let cart:Product[] = [
    {
        id:1,
        name: 'ip8',
        price: 5000,
        quantity: 5
    },
    {
        id:2,
        name: 'ip6',
        price: 7000,
        quantity: 9
    },   
    {
        id:3,
        name: 'ip10',
        price: 3000,
        quantity: 2
    }
]

export default function B7() {
    const [myCart,setMyCart] = useState<Product[]>(cart)

    const productList = useMemo(() => {
        return myCart.map((product) => (
            <B7con
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ));
    }, [myCart]);
    
  return (
    <>
    <h2>Danh sách sản phẩm</h2>
    {productList}
    </>
  )
}
