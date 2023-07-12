import * as React from "react"

import Layout from '../components/layout'
import {BsWhatsapp} from "react-icons/bs";
import * as ContactoStyle from '../assets/css/contacto.module.css';
import "../assets/css/global.css"


function contacto() {
  return (
    <Layout>
         <article className={ContactoStyle.info}>
            <section className={ContactoStyle.info__text}>
                <h2 className={`title--3 `}>Contacto</h2>
                <p >
                  Aqui encontraras todos nuestros datos de contacto, estaremos encantados de atenderte. 
                </p>
                <div className={ContactoStyle.info__text__container}>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Teléfono:</h3>
                    <p> +593 98 255 5079 </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Correo Electrónico:</h3>
                    <p>
                      <a className='link--reset--black' href="mailto:thecatering.co@outlook.com
                      ">
                        thecatering.co@outlook.com
                      </a>
                    </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Whatsapp:</h3>
                    <p>
                      Si deseas contactarnos por whatsapp, puedes hacerlo a través de este enlace. Y un Event Planner se contactará contigo lo más pronto posible.
                    </p>
                    <button className="button button--green">
                      <a className="link--icon--white link--reset" href="https://api.whatsapp.com/send?phone=593982555079">
                        <BsWhatsapp/> Deseo información
                      </a>
                    </button>
                  </div>
                </div>
            </section>
            <figure>
                <img className="img--large" src="https://placehold.co/600x400/555/white" alt="Contacto" />
            </figure>
        </article>
    </Layout>
  )
}

export default contacto