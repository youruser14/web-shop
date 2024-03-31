import React from "react";
import "../styles/ProductItem.css";
import { ListProduct } from "./ListProduct/ListProduct";
import { ListProductControls } from "./ListProduct/ListProductControls";
import { useBasket } from "../context/BasketContext";
import { ListProductBasketControls } from "./ListProduct/ListProductBasketControls";

function Products({ goods }) {
  const { basket } = useBasket();
  return (
    <main>
      {goods.map((category) => {
        return (
          <div className="product__main" key={category.categoryTitle}>
            <p className="category__title p">{category.categoryTitle}</p>
            <div className="category__items">
              {category.categoryGoods.map((item, index) => {
                return (
                  <ListProduct key={index} item={item}>
                    {basket[item.id] ? (
                      <ListProductBasketControls item={item} />
                    ) : (
                      <ListProductControls item={item} />
                    )}
                  </ListProduct>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Products;
