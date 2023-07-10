import React from 'react';
import { Link } from 'gatsby';

import {BsWhatsapp} from "react-icons/bs";
import * as ContactButtonsStyles from "../assets/css/modules/contactButtons.module.css";


function ContactButtons({orientation,color}) {
  return (
    <div className={orientation==="col" ? `${ContactButtonsStyles.services__buttons} flex--col--nowrap gap--2rem` : `${ContactButtonsStyles.services__buttons} flex--row--nowrap gap--4rem`}>
            <button className={color ? "button button--white" : "button button--black"}> 
              <Link className={color ? "link--button--black link--reset" : "link--button--white link--reset"} to="/contacto">Cotiza tu Evento</Link>
            </button>
            <span className={color ? "color--white1" : null}>
              O
            </span>
            <button className=" button button--green">
              <a href='https://api.whatsapp.com/send?phone=593982555079' className="link--icon--white link--reset"> <BsWhatsapp/> Escribenos</a>
            </button>
    </div>
  )
}

export default ContactButtons