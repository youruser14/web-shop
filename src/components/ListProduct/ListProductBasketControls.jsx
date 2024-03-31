import RateImg from "../../media/Rate.png";
import React from "react";
import { useBasket } from "../../context/BasketContext";

export const ListProductBasketControls = ({ item }) => {
  const { basket, increaseNumber, decreaseNumber } = useBasket();
  return (
    <div className="product__item-controls">
      <div className="product__rate">
        <img src={RateImg} alt="" className="product__rate-img" />
        <h2 className="product__rate-number">{item.rate}</h2>
      </div>
        <div>
            <div className='product__item-count'>
                <button className='product__item-btn' onClick={() => decreaseNumber(item.id)}>-</button>

                <div className='item-count'>
                {basket[item.id]?.count}
                </div>

            <button className='product__item-btn item-btn-count' onClick={() => increaseNumber(item.id)}>+</button>
            </div>
        </div>
    </div>
  );
};
