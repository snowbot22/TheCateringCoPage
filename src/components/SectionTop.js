import { Link } from "gatsby"
import React ,{ forwardRef } from "react"
import * as topStyles from "../assets/css/SectionTopPage.module.css"


const SectionTop = forwardRef(
  ({ imagePath, imageAlt, title, logo, text, buttonText, id }, ref) => {
    function setTitle() {
      if (title) {
        return (
          <h3 className="title--1 lines">
            <span>{title}</span>
          </h3>
        )
      } else {
        return null
      }
    }
    function setLogo() {
      if (logo) {
        return (
          <figure className={topStyles.logo}>
            <img className="img--large img--contain" src={logo} alt="Logo" />
          </figure>
        )
      } else {
        return null
      }
    }

    return (
      <article
        className={topStyles.container}
        ref={ref}
        id={id ? id : "generic"}
      >
        <figure className={topStyles.figure}>
          <img
            className="img--large img--cover"
            src={imagePath}
            alt={imageAlt}
          />
        </figure>
        <section className={topStyles.text}>
          {setTitle()}
          {setLogo()}
          <p className={`p--4 weight--600 ${topStyles.p}`}>{text}</p>
          <button className="button button--black">
            <Link className="link--reset link--button--white" to="meraki/">
              {buttonText}
            </Link>
          </button>
        </section>
      </article>
    )
  }
)

export default SectionTop
