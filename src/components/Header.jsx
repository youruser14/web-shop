import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import LinkButton from "./UI/LinkButton";
import Basket from "./UI/UI-images/basket.svg";
import Favourites from "./UI/UI-images/favourites.svg";
import { useBasket } from "../context/BasketContext";

function Header(props) {
  const { itemsCount } = useBasket();
  return (
      <header className="header">
          <div className="header__logo logo">
              <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                  {props.titleHeader}
              </Link>
          </div>

          <div className="user__interface">
              <div style={{marginRight: '45px'}}>
                <LinkButton to={"/favourites"} source={Favourites}/>
              </div>
              <div>
                <LinkButton to={"/basket"} source={Basket} />
              </div>

              {itemsCount()
                  ? <div className='user__interface-basket-count'> {itemsCount()}</div>
                  : ''
              }
                  </div>

                  </header>
                  );
              }

export default Header;
