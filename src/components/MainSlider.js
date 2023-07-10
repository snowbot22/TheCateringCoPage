import React from 'react'

import Header1 from '../assets/images/header--1.jpg'
import * as MainSliderStyles from "../assets/css/modules/mainSlider.module.css"
import { Link } from 'gatsby'

function MainSlider({ imgage, text, buttonText }) {
  return (
    <article className={MainSliderStyles.container}>
        <figure className={MainSliderStyles.figure}>
            <img className='img--large img--cover' src={Header1} alt='pareja-en-fondo-negro' />
        </figure>
        <section className={MainSliderStyles.text}>
            <h1 className={MainSliderStyles.title}>
                {text}
            </h1>
            <button className='button--black'>
                <Link className='link--button--white link--reset' to='/contacto/'>
                    {buttonText}
                </Link>
            </button>
        </section>
    </article>
  )
}

export default MainSlider