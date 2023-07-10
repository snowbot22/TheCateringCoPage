import React from 'react'

import NavigationBar from '../components/NavigationBar'
import * as ServicesTemplateStyle from '../assets/css/modules/servicesTemplate.module.css'

function ServicesTemplate({ image,logo,description, services }) {
  return (
    <article className={ServicesTemplateStyle.container}>
        <figure className={ServicesTemplateStyle.figure}>
            <img src={image} alt="landscape" className='img--large img--cover'/>
        </figure>
        <NavigationBar Services={services}/>
        <div className={ServicesTemplateStyle.text}>
            <figure>
                <img src={logo} alt="logo" className='img--large img--contain' />
            </figure>
            <p className={ServicesTemplateStyle.description}>  
              {description}
            </p>
        </div>
    </article>
  )
}

export default ServicesTemplate