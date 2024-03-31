import React from "react";

export const ListProductTitle = ({ item: { title, price, discount } }) => {
  return (
    <div className="product__item-title-content">
      <h1 className="product__item-title h1">{title}</h1>
      <div className="product__item-total-price">
        <div className="product__item-price h1">{price} ₽</div>
        <div className="product__item-discount">
          {discount ? <h1>{discount} ₽</h1> : ""}
        </div>
      </div>
    </div>
  );
};
