import React from "react";
import { ListProductTitle } from "./ListProductTitle";

export const ListProduct = ({ item, children }) => {
  return (
    <div className="product__card">
      <div className="product__item-content">
        <div className="product__item-img">
          <img
            className="product__item-img-content"
            src={`../images/goods/headphones/` + item.img}
            alt=""
          />
        </div>

        <ListProductTitle item={item} />
        {children}
      </div>
    </div>
  );
};
