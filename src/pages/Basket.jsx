import React from "react";
import { useBasket } from "../context/BasketContext";
import { BasketProduct } from "../components/BasketProduct/BasketProduct";

const Basket = () => {
  const { basket, summary } = useBasket();

  const isBasketEmpty = Object.keys(basket).length === 0;

  return (
    <div className='basket' style={{minHeight: '70vh'}}>
        {
            isBasketEmpty
                ? (<div className='h1' style={{textAlign: 'center'}}>Ваша корзина пуста</div>)
                : (


        <div className='basket__content-items'>
            <h2 style={{fontWeight: '600', fontSize: '20px', marginTop: '30px', marginBottom: '30px'}}>
                Корзина
            </h2>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        {Object.keys(basket).map((cartItem) => {
                            return <BasketProduct key={cartItem} item={basket[cartItem]}/>;
                        })}
                    </div>

                <div className='basket__content-total-price' style={{marginTop: '20px'}}>

                    <div className='basket__total'>
                            <div style={{textTransform: 'uppercase', fontWeight: '600', fontSize: '15px'}}>Итого</div>
                            <div style={{}}>₽ {summary()}</div>
                    </div>

                    <div>
                        <button className='product__item-btn basket__purchase-btn-content'>
                            <div className='basket__purchase-btn'>Перейти к оформлению</div>
                        </button>
                    </div>

                </div>

            </div>
        </div>
                )}
    </div>
  );
};

export default Basket;
