import Layout from "../components/layout"
import React, { useRef, useState, useEffect } from "react"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import Seo from "../components/seo"
import ServicesBar from "../components/ServicesBar"
import SocialSection from "../components/SocialSection"

function Meraki() {
  
  let servicesList = [
    {
      name: "Meraki Eventos Sociales",
      link: "#meraki-eventos-sociales",
    },
    {
      name: "Meraki Eventos Corporativos",
      link: "#meraki-eventos-corporativos",
    },
    {
      name: "Meraki Brunch",
      link: "#meraki-brunch",
    },
    {
      name: "Nuestra Casa",
      link: "#nuestra-casa",
    },
  ]

  return (
    <Layout>
      <ServicesBar Services={servicesList} />
      <Section
        titleTag="h2"
        title="Meraki Eventos Sociales"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        imageAlt="Imagen de una pareja"
        leftRight={"left"}
        id="meraki-eventos-sociales"
        titleColor="title--1 lines"
      />
      <Section
        titleTag="h2"
        title="Meraki Eventos Corporativos"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        buttonOrientation={"col"}
        imageAlt="Imagen de una pareja"
        leftRight={"right"}
        bg={"bg--meraki"}
        id="meraki-eventos-corporativos"
        titleColor="title--bg"
      />
      <Section
        titleTag="h2"
        title="Meraki Brunch"
        text="Descripción"
        button={true}
        imagePath="https://placehold.co/600x400/555/white"
        buttonOrientation={"col"}
        imageAlt="Imagen de una pareja"
        leftRight={"left"}
        id="meraki-brunch"
        titleColor="title--1 lines"
      />
      <SectionTop
        titleTag="h2"
        title="Nuestra Casa"
        text="Descripción"
        buttonText={"Conocela"}
        imagePath="https://placehold.co/600x400/555/white"
        imageAlt="Imagen de una pareja"
        id="nuestra-casa"
      />
      <SocialSection />
    </Layout>
  )
}

export default Meraki

/** 
 * SEO
 */
export const Head = () => <Seo title={"Meraki Brunch & Events"}/>