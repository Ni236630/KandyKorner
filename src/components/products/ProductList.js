import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="products">
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} />;
      })}
    </div>
  );
};
