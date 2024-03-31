import React from "react";
import { Link } from "react-router-dom";

function NavListFooter({ navItems }) {
  return (
    <ul>
      {navItems.map((item) => (
        <li className="footer__link-item h3" key={item.title}>
          <Link to={item.link} className="link__item">
            {item.title}
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}

export default NavListFooter;
