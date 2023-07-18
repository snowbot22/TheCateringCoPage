import Form from "../components/Form"
import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

function cotiza() {
  return (
    <Layout>
      <Form />
    </Layout>
  )
}

export default cotiza

/**
 * SEO
 */
export const seo = () => <Seo title="Formulario Cotización" />