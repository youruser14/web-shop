import React from "react";
import { useBasket } from "../../context/BasketContext";
import '../../styles/basket.css'
import Delete from '../UI/UI-images/Delete.svg'
import LinkButton from "../UI/LinkButton";

export const BasketProduct = ({ item }) => {
  const { increaseNumber, decreaseNumber, deleteItem } = useBasket();
  return (
    <div className='basket__item-cart'>
        <div className='basket__item-cart-left'>
            <img className='basket__item-img' src={`../images/goods/headphones/` + item.img} alt=""/>
                <div className='product__item-counter'>
                    <button className='product__item-btn product__item-btn-basket'
                                onClick={() => decreaseNumber(item.id)}>
                        <div className='btn-basket-count' style={{paddingBottom: '8px'}}>-</div>
                    </button>
                    {item.count}
                    <button className='product__item-btn product__item-btn-basket' onClick={() => increaseNumber(item.id)}>
                        <div className='btn-basket-count'>+</div>
                    </button>
                </div>
            </div>

        <div className='basket__item-main-info'>
            <div className='basket__item-title'>{item.title}</div>
            <div className='basket__item-price'>{item.price}</div>

        </div>

        <div className='basket__item-right-cart'>
            <button className='product__item-btn-delete product__item-btn' onClick={() => deleteItem(item.id)}><LinkButton source={Delete}/></button>
            <div className='h1'>{item.count * item.price} ₽</div>
        </div>
    </div>
  );
};
