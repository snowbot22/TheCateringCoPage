import * as FooterStyle from "../assets/css/footer.module.css"
import { Link } from "gatsby"
import React from "react"

function Footer() {
  return (
    <footer>
      <section className={FooterStyle.footer__links}>
        <ul className={`${FooterStyle.footer__links__ul} ul--reset`}>
          <li>
            <Link
              className="link--reset--white hover--underline--white title--white--20rem"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="link--reset--white hover--underline--white title--white--20rem"
              to="/servicios"
            >
              Servicios
            </Link>
            <ul className={FooterStyle.footer__links__submenu}>
              <li>
                <Link
                  className="link--reset--white hover--underline--white "
                  to="/servicios/#eventos-sociales"
                >
                  Eventos Sociales
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/servicios/#eventos-corporativos"
                >
                  Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/servicios/#conciertos"
                >
                  Conciertos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/servicios/#locaciones"
                >
                  Locaciones
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="link--reset--white hover--underline--white title--white--20rem"
              to="/meraki"
            >
              Meraki Brunch & Eventos
            </Link>
            <ul className={FooterStyle.footer__links__submenu}>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/meraki/#meraki-eventos-sociales"
                >
                  Meraki Eventos Sociales
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/meraki/#meraki-eventos-corporativos"
                >
                  Meraki Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/meraki/#meraki-brunch"
                >
                  Meraki Brunch
                </Link>
              </li>
              <li>
                <Link
                  className="link--reset--white hover--underline--white"
                  to="/meraki/#nuestra-casa"
                >
                  Nuestra Casa
                </Link>
              </li>
            </ul>
          </li>
          <li className={FooterStyle.footer__contact}>
            <h2 className="title--white--20rem">Contactanos</h2>
            <ul className={`${FooterStyle.footer__contact__ul} ul--reset`}>
              <li>
                <p
                  className={`${FooterStyle.footer__contact__title} link--reset--white`}
                >
                  Facebook:
                </p>
                <ul className="ul--reset">
                  <li>
                    <a
                      className="link--reset--white hover--underline--white"
                      href="https://www.facebook.com/TheCateringCoQuito"
                    >
                      @TheCateringCoQuito
                    </a>
                  </li>
                  <li>
                    <a
                      className="link--reset--white hover--underline--white"
                      href="https://www.facebook.com/MerakiBrunchyEventos"
                    >
                      @MerakiBrunchyEventos
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p
                  className={`${FooterStyle.footer__contact__title} link--reset--white`}
                >
                  Instagram:
                </p>
                <ul className="ul--reset">
                  <li>
                    <a
                      className="link--reset--white hover--underline--white"
                      href="https://www.instagram.com/thecatering.co/"
                    >
                      @thecatering.co
                    </a>
                  </li>
                  <li>
                    <a
                      className="link--reset--white hover--underline--white"
                      href="https://www.instagram.com/meraki_brunch_restaurante/"
                    >
                      @meraki_brunch_restaurante
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p
                  className={`${FooterStyle.footer__contact__title} link--reset--white`}
                >
                  Whatsapp:
                </p>
                <ul className="ul--reset">
                  <li>
                    <a
                      className="link--reset--white hover--underline--white"
                      href="https://wa.me/593982555079"
                    >
                      +593 98 255 5079
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p
                  className={`${FooterStyle.footer__contact__title} link--reset--white`}
                >
                  Direccón:
                </p>
                <a
                  className="link--reset--white hover--underline--white"
                  href="https://goo.gl/maps/R3mX8aiFnFFsuXAb7"
                >
                  Fabian Jaramillo S8-122 y, Quito 170805
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <address className={FooterStyle.footer__address}>
        &copy; The CateringCo {new Date().getFullYear()}
      </address>
    </footer>
  )
}

export default Footer
