import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <section className="product">
      <h3 className="product__name">{product.name}</h3>
      <div className="product__type">Type: {product.productType.type}</div>
      <div className="product__price">Price: ${product.price}</div>
    </section>
  );
};
