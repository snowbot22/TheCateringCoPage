import Layout from "../components/layout"
import React, { useRef, useState, useEffect } from "react"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import ServicesBar from "../components/ServicesBar"
import SocialSection from "../components/SocialSection"

function Meraki() {
  const [pos1, setPos1] = useState(0)
  const [pos2, setPos2] = useState(0)
  const [pos3, setPos3] = useState(0)
  const [pos4, setPos4] = useState(0)

  const articleRef1 = useRef(null)
  const articleRef2 = useRef(null)
  const articleRef3 = useRef(null)
  const articleRef4 = useRef(null)

  useEffect(() => {
    let { offsetTop } = articleRef3.current
    console.log(offsetTop)
    setPos3(offsetTop)
  }, [])

  useEffect(() => {
    let { offsetTop } = articleRef2.current
    console.log(offsetTop)
    setPos2(offsetTop)
  }, [])

  useEffect(() => {
    let { offsetTop } = articleRef1.current
    console.log(offsetTop)
    setPos1(offsetTop)
  }, [])

  useEffect(() => {
    let { offsetTop } = articleRef4.current
    console.log(offsetTop)
    setPos4(offsetTop)
  }, [])

  let servicesList = [
    {
      name: "Meraki Eventos Sociales",
      link: pos1,
    },
    {
      name: "Meraki Eventos Corporativos",
      link: pos2,
    },
    {
      name: "Meraki Brunch",
      link: pos3,
    },
    {
      name: "Nuestra Casa",
      link: pos4,
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
        ref={articleRef1}
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
        ref={articleRef2}
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
        ref={articleRef3}
        titleColor="title--1 lines"
      />
      <SectionTop
        titleTag="h2"
        title="Nuestra Casa"
        text="Descripción"
        buttonText={"Conocela"}
        imagePath="https://placehold.co/600x400/555/white"
        imageAlt="Imagen de una pareja"
        ref={articleRef4}
        id="nuestra-casa"
      />
      <SocialSection />
    </Layout>
  )
}

export default Meraki
