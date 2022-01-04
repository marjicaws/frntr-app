import React from "react";

export default function CartCard({ product, index, handleDeleteProduct }) {
  return (
    <div>
      {console.log(product)}
      <img src={product.img} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={(e) => handleDeleteProduct(e, index)}>
        Remove Item
      </button>
    </div>
  );
}
