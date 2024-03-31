import RateImg from "../../media/Rate.png";
import React from "react";
import { useBasket } from "../../context/BasketContext";

export const ListProductControls = ({ item }) => {
  const { addItem } = useBasket();

  return (
    <div className="product__item-controls">
      <div className="product__rate">
        <img src={RateImg} alt="" className="product__rate-img" />
        <h2 className="product__rate-number">{item.rate}</h2>
      </div>
      <div>
        <button className="product__item-btn h1" onClick={() => addItem(item)}>
          Купить
        </button>
      </div>
    </div>
  );
};
