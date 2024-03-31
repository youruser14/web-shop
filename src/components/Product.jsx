import React from 'react';
import '../styles/ProductItem.css'
import RateImg from '../images/Rate.png'

function Product({...props}) {



    return (
        <div className='product__card'>

            <div className='product__item-content'>

                <div className='product__item-img'>
                    <img  className='product__item-img-content' src={`../images/goods/headphones/` + props.item.img} alt=""/>
                </div>

                    <div className='product__item-title-content'>
                        <h1 className='product__item-title h1'>{props.item.title}</h1>
                        <div className='product__item-total-price'>
                            <div className='product__item-price h1'>{props.item.price} ₽</div>
                            <div className="product__item-discount">
                                {props.item.discount ?
                                    <h1>{props.item.discount} ₽</h1>
                                    : ''}
                            </div>
                        </div>
                    </div>

                <div className='product__item-interface'>

                    <div className='product__rate'>
                        <img src={RateImg} alt="" className='product__rate-img'/>
                        <h2 className='product__rate-number'>{props.item.rate}</h2>
                    </div>
                    <div>
                        <button className='product__item-btn h1'

                        >Купить</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Product;