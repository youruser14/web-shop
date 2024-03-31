import React from 'react';
import '../styles/footer.css'
import NavListFooter from "./NavListFooter";
import LangSvg from '../media/Group.svg'
import vkSvg from '../media/VK.svg'
import telegramSvg from '../media/Telegram.svg'
import whatsappSvg from '../media/Whatsapp.svg'
import {Link} from "react-router-dom";
function Footer(props) {
    const navItems =
        [{
            title: 'Избранное',
            link: '/favorites'
        },
            {
                title: 'Корзина',
                link: '/cart'
            },
            {
                title: 'Контакты',
                link: '/contacts'
            }
        ];

    return (
        <div className='footer__flex'>
            <div className='footer__logo logo'>
                <Link to='/' style={{ textDecoration: 'none', color: "inherit"}}>
                {props.titleFooter}
                </Link>
                </div>
            <div className='footer__nav'>
                <NavListFooter
                    navItems={navItems}

                />
            </div>

            <div className='footer__public'>

                <div className="footer__conditions">
                    <a className="footer__conditions-item h3" href="#">
                    {props.footerCondition}
                    </a>
                </div>

                <div className="footer__language">
                    <span>
                        <img src={LangSvg} alt="" className='footer__language-icon'/>
                    </span>
                    <div className='footer__language-lang'>Рус</div>
                    <div className='footer__language-lang'>Eng</div>
                </div>

            </div>

            <div className='footer__social'>
                    <span>
                        <a href="#">
                            <img src={vkSvg} alt="" className='footer__social-icon'/>
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src={telegramSvg} alt="" className='footer__social-icon'/>
                        </a>
                    </span>
                    <span>
                        <a href="">
                            <img src={whatsappSvg} alt="" className='footer__social-icon'/>
                        </a>
                    </span>
            </div>

        </div>
    );
}

export default Footer;