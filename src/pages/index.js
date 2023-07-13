
import img from "../images/index--1.jpg"
import img2 from "../images/index--2.jpg"
import Layout from "../components/layout"
import merakiLogo from "../assets/icons/logo-meraki-sf--negro.png"
import React from "react"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import SectionMain from "../components/SectionMain"
import Seo from "../components/seo"
import SocialSection from "../components/SocialSection"

import "../assets/css/global.css"

const IndexPage = () => (

  <Layout>
    <SectionMain />
    <Section
      titleTag="h2"
      title="Creemos Momentos Inolvidables"
      text="En The Catering Co. estos 11 años nos hemos especializado
      en la organización de todo tipo de evento y 
      somos un aliado estratégico para nuestros clientes con 
      nuestra división Meraki Brunch & Eventos.
      Ofreciendo soluciones integrales para nuestros clientes"
      subtitle="Contáctanos y empecemos a crear tu evento soñado."
      button={true}
      imagePath={img}
      buttonOrientation={"col"}
      imageAlt="Imagen de una pareja"
      leftRight={"left"}
    />
    <SectionTop
      imagePath={img2}
      imageAlt="Imagen de una ceremonia"
      title={false}
      logo={merakiLogo}
      text="Creamos Meraki Brunch & Eventos para elevar tus eventos al siguiente nivel.
      Te ofrecemos una experiencia gastronómica única, con un servicio de calidad y un espacio de primera."
      buttonText="Conoce más"
    />
    <SocialSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
