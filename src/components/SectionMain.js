import { Link } from "gatsby"
import { IoIosArrowDown } from "react-icons/io"
import React from "react"
import * as Main from "../assets/css/sectionMain.module.css"


function SectionMain() {
  return (
    <article className={Main.container}>
      <section className={Main.overlay}>
        <h1 className={Main.title}>
          Somos Planificadores, <br />
          Diseñadores, <br />
          Catering de Eventos sociales, corporativos
          <br /> y <br /> conciertos
        </h1>
        <div className={Main.section}>
          <button className="button button--white radius--8px">
            <Link to="/" className="link--reset link--button--black font--20">
              Descubre nuestros servicios
            </Link>
          </button>
          <IoIosArrowDown className="font--90 color--white1 cursor--pointer" />
        </div>
      </section>
    </article>
  )
}

export default SectionMain
