import React from "react"
import { useRef,forwardRef } from "react"

import ContactButtons from "./ContactButtons"
import * as LeftStyles from "../assets/css/modules/leftarticle.module.css"


const SectionLeft= forwardRef(({
  titleTag,
  title,
  text,
  button,
  buttonOrientation,
  imagePath,
  imageAlt,
  subtitle,
  leftRight,
  bg,
  textColor,
  id,
  buttonColor,
  titleColor
},ref) => {
  function createTitle() {
    if (titleTag === "h2") {
      return (
        <h2 className={titleColor}>
          <span>{title}</span>
        </h2>
      )
    } else if (titleTag === "h3") {
      return <h3>{title}</h3>
    } else if (titleTag === "h4") {
      return <h4>{title}</h4>
    }
  }

  function createButtons() {
    if (button) {
      return (
        <ContactButtons
          button={button}
          orientation={buttonOrientation}
          color={buttonColor ? {buttonColor} : null }
        />
      )
    } else {
      return null
    }
  }

  function createSubtitle(){
    if(subtitle){
      return <p className="subtitle--1">{subtitle}</p>
    }
    else{
      return null
    }
  }

  return (
    <article className={bg ? `${LeftStyles.container} ${bg}` : LeftStyles.container} ref={ref} id={id ? id : "generic" }>
      <figure className={leftRight=== "left" ? `${LeftStyles.position2} ${LeftStyles.figure}` : `${LeftStyles.position1} ${LeftStyles.figure}`}>
        <img className="img--large img--cover" src={imagePath} alt={imageAlt} />
      </figure>
      <section className={leftRight === "left" ? `${LeftStyles.text} ${LeftStyles.position1}`: `${LeftStyles.text} ${LeftStyles.position2}`}>
        {createTitle()}
        <p className={textColor ? `${textColor} p--1`: `p--1`}>{text}</p>
        {createSubtitle()}
        {createButtons()}
      </section>
    </article>
  )
})

export default SectionLeft
