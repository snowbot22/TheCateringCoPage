import Layout from "../components/layout"
import React from "react"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import Seo from "../components/seo"
import ServicesBar from "../components/ServicesBar"
import SocialSection from "../components/SocialSection"

function Servicios() {

  let servicesList= [
    {
      name: "Eventos Sociales",
      link: "#eventos-sociales"
    },
    {
      name: "Eventos Coorporativos",
      link: "#eventos-corporativos"
    },
    {
      name: "Conciertos",
      link: "#conciertos"
    },
    {
      name: "Locaciones",
      link: "#locaciones"
    }
  ]

  return (
    <Layout>
      <ServicesBar Services={servicesList} />
      <Section 
        titleTag="h2"
        title="Eventos Sociales"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        buttonOrientation={"col"}
        imageAlt="Imagen de una pareja"
        leftRight={"left"}
        id="eventos-sociales"
        titleColor="title--1 lines"
      />
      <Section 
        titleTag="h2"
        title="Eventos Coorporativos"
        text="Descripción"
        imagePath="https://placehold.co/600x400/555/white"
        bg="bg--black"
        leftRight={"right"}
        textColor="color--white1"
        button={true}
        buttonOrientation={"col"}
        buttonColor={"white"}
        id="eventos-corporativos"
        titleColor="title--1--white lines--white"
      />
      <Section
        titleTag="h2"
        title="Conciertos"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        buttonOrientation={"col"}
        imageAlt="Imagen de una pareja"
        leftRight={"left"}
        id="conciertos"
        titleColor="title--1 lines"
      />
      <SectionTop 
        titleTag="h2"
        title="Locaciones"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        buttonText={"Descubrelas"}
        id="locaciones"
      />
      <SocialSection  />
    </Layout>
  )
}

export default Servicios

/**
 * SEO
 */
export const Head = () => <Seo title="Servicios" />