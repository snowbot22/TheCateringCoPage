import React from 'react'
import * as ServicesBarStyle from "../assets/css/ServicesBarPage.module.css"


function ServicesBar({Services}) {
  
  return (
    <article className={ServicesBarStyle.services__bar}>
            <ul className={`${ServicesBarStyle.services__bar__ul} ul--reset`} >
                {Services.map((service,index)=>{
                    return <li key={"li" + index}>
                              <a href={service.link} className={ServicesBarStyle.services__bar__link}>{service.name}</a>
                           </li>
                })}
            </ul>
    </article>
  )
}

export default ServicesBar