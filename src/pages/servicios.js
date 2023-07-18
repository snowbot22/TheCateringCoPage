import Layout from "../components/layout"
import React from "react"
import { useRef,useState,useEffect } from "react"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import Seo from "../components/seo"
import ServicesBar from "../components/ServicesBar"
import SocialSection from "../components/SocialSection"

function Servicios() {

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [pos3, setPos3] = useState(0);
  const [pos4, setPos4] = useState(0);

  const articleRef1 = useRef(null)
  const articleRef2 = useRef(null)
  const articleRef3 = useRef(null)
  const articleRef4 = useRef(null)
  
  useEffect(() => {
    let {offsetTop} = articleRef1.current;
    console.log(offsetTop);
    setPos1(offsetTop-100);
  }, [])

  useEffect(() => {
    let {offsetTop} = articleRef2.current;
    console.log(offsetTop);
    setPos2(offsetTop-100);
  }, [])

  useEffect(() => {
    let {offsetTop} = articleRef3.current;
    console.log(offsetTop);
    setPos3(offsetTop-100);
  }, [])

  useEffect(() => {
    let {offsetTop} = articleRef4.current;
    console.log(offsetTop);
    setPos4(offsetTop-100);
  }, [])

  let servicesList= [
    {
      name: "Eventos Sociales",
      link: pos1
    },
    {
      name: "Eventos Coorporativos",
      link: pos2
    },
    {
      name: "Conciertos",
      link: pos3
    },
    {
      name: "Locaciones",
      link: pos4
    }
  ]

  console.log(articleRef1);


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
        ref={articleRef1}
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
        ref={articleRef2}
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
        ref={articleRef3}
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
        ref={articleRef4}
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