import { Link } from "gatsby"
import React from "react"
import * as socialStyles from "../assets/css/socialarticle.module.css"


function SocialSection() {
  return (
    <article className={socialStyles.container}>
      <figure className={socialStyles.figure}>
        <img
          className="img--large img--cover"
          src="https://placehold.co/600x400/555/white"
          alt="Gente en una fiesta"
        />
      </figure>
      <section className={socialStyles.text}>
        <h2 className="title--1--white lines--white">
          <span>!Revive tus momentos especiales¡</span>
        </h2>
        <p className="p--4 color--white1">
          Encuentra las fotos y los videos de tu día especial en nuestras redes
          sociales
        </p>
        <div className={socialStyles.buttons}>
          <button className="button">
            <Link
              className="link--reset link--button--black--2rem"
              to="https://www.facebook.com/"
            >
              Facebook
            </Link>
          </button>
          <button className="button">
            <Link
              className="link--reset link--button--black--2rem"
              to="https://www.facebook.com/"
            >
              Instagram
            </Link>
          </button>
          <button className="button">
            <Link
              className="link--reset link--button--black--2rem"
              to="https://www.facebook.com/"
            >
              TikTok
            </Link>
          </button>
        </div>
      </section>
    </article>
  )
}

export default SocialSection
