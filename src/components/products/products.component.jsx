import React from "react";
import { useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";

import ProductItem2 from "../product-item/ProductsItem2";

function Products() {
  const products = useSelector(selectProductsArray);
  const sortedProducts = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  const productsArray = products.data;

  return (
    <>
      {isSorted
        ? sortedProducts.data.map((product) => (
            <ProductItem2 key={product.id} product={product} />
          ))
        : productsArray &&
          productsArray.map((product) => (
            <ProductItem2 key={product.id} product={product} />
          ))}
    </>
  );
}

export default Products;
