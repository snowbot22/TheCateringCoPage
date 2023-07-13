import { AiOutlineArrowDown, AiFillCloseCircle } from "react-icons/ai"
import CateringLogo from "../assets/icons/catering-logo.webp"
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaBars,
  FaArrowAltCircleDown,
} from "react-icons/fa"
import { Link } from "gatsby"
import * as HeaderStyle from "../assets/css/HeaderPage.module.css"
import React, { useState } from "react"

const Header = () => {
  //USE STATE TO HANDLE RESPONSIVE MENU
  const [menu, setMenu] = useState()
  const [submenu, setSubmenu] = useState(false)
  const [submenu2, setSubmenu2] = useState(false)

  //FUNCTION
  function handleMenu() {
    setMenu(!menu)
  }

  function handleSubmenu() {
    setSubmenu(!submenu)
    setSubmenu2(false)
  }

  function handleSubmenu2() {
    setSubmenu2(!submenu2)
    setSubmenu(false)
  }

  return (
    <header>
      <button
        className={`${HeaderStyle.header__menu} cursor--pointer`}
        onClick={handleMenu}
      >
        <FaBars />
      </button>
      <nav
        className={
          menu
            ? HeaderStyle.header__nav
            : `${HeaderStyle.header__nav} ${HeaderStyle.header__hidden}`
        }
      >
        <div className={HeaderStyle.header__nav__title}>
          <AiFillCloseCircle
            onClick={handleMenu}
            className={`${HeaderStyle.header__nav__title__icon}`}
          />
        </div>
        <ul className={`${HeaderStyle.header__nav__ul} ul--reset`}>
          <li className={HeaderStyle.header__nav__ul__li}>
            <Link className={HeaderStyle.header__link} to="/">
              {" "}
              Inicio{" "}
            </Link>
          </li>
          <li
            className={`${HeaderStyle.header__li__icon} ${HeaderStyle.header__hover}`}
          >
            <div className={HeaderStyle.header__li__icon__container}>
              <Link className={HeaderStyle.header__link__icon} to="/servicios">
                Servicios
                <AiOutlineArrowDown
                  className={`${HeaderStyle.header__link__button}`}
                />
              </Link>
              <button
                className={HeaderStyle.header__link__button__mobile}
                onClick={handleSubmenu2}
              >
                <FaArrowAltCircleDown />
              </button>
            </div>
            <ul className={HeaderStyle.header__submenu}>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#eventos-sociales"
                >
                  Eventos Sociales
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#eventos-corporativos"
                >
                  Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#conciertos"
                >
                  Conciertos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#locaciones"
                >
                  Locaciones
                </Link>
              </li>
            </ul>
            <ul
              className={
                submenu2
                  ? HeaderStyle.header__submenu__mobile
                  : `${HeaderStyle.hidden}`
              }
            >
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#eventos-sociales"
                >
                  Eventos Sociales
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#eventos-corporativos"
                >
                  Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#conciertos"
                >
                  Conciertos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white w100"
                  to="/servicios/#locaciones"
                >
                  Locaciones
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${HeaderStyle.header__li__icon} ${HeaderStyle.header__hover}`}
          >
            <div className={HeaderStyle.header__li__icon__container}>
              <Link className={HeaderStyle.header__link__icon} to="/meraki">
                Meraki Brunch & Events
                <AiOutlineArrowDown
                  className={HeaderStyle.header__link__button}
                />
              </Link>
              <button
                className={HeaderStyle.header__link__button__mobile}
                onClick={handleSubmenu}
              >
                <FaArrowAltCircleDown />
              </button>
            </div>
            <ul className={HeaderStyle.header__submenu}>
              <li>
                <Link
                  to="/meraki/#meraki-eventos-sociales"
                  className="link--reset--white w100"
                >
                  Meraki Social
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#meraki-eventos-corporativos"
                  className="link--reset--white w100"
                >
                  Meraki Corporativo
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#meraki-brunch"
                  className="link--reset--white w100"
                >
                  Meraki Brunch
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#nuestra-casa"
                  className="link--reset--white w100"
                >
                  Nuestra Casa
                </Link>
              </li>
            </ul>
            <ul
              className={
                submenu
                  ? HeaderStyle.header__submenu__mobile
                  : `${HeaderStyle.hidden}`
              }
            >
              <li>
                <Link
                  to="/meraki/#meraki-eventos-sociales"
                  className="link--reset--white w100"
                >
                  Meraki Social
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#meraki-eventos-corporativos"
                  className="link--reset--white w100"
                >
                  Meraki Corporativo
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#meraki-brunch"
                  className="link--reset--white w100"
                >
                  Meraki Brunch
                </Link>
              </li>
              <li>
                <Link
                  to="/meraki/#nuestra-casa"
                  className="link--reset--white w100"
                >
                  Nuestra Casa
                </Link>
              </li>
            </ul>
          </li>
          <li className={HeaderStyle.header__nav__ul__li}>
            <Link className={HeaderStyle.header__link} to="/contacto">
              {" "}
              Contacto{" "}
            </Link>
          </li>
          <li className={HeaderStyle.header__nav__ul__li}>
            <Link className={HeaderStyle.header__link} to="/cotiza">
              {" "}
              Cotiza{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <figure className={HeaderStyle.header__figure}>
        <Link to="/">
          <img
            className="img--large img--contain"
            src={CateringLogo}
            alt="Catering Logo"
          />
        </Link>
      </figure>
      <section className={HeaderStyle.header__section}>
        <ul className={`${HeaderStyle.header__section__ul} ul--reset`}>
          <li>
            <a
              href="https://www.facebook.com/TheCateringCoQuito"
              className={HeaderStyle.header__social}
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thecatering.co/"
              className={HeaderStyle.header__social}
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@merakibrunchyeventos?lang=es"
              className={HeaderStyle.header__social}
            >
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header
