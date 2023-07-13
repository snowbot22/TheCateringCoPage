import React from 'react'
import * as ServicesBarStyle from "../assets/css/ServicesBarPage.module.css"


function ServicesBar({Services}) {

  
  return (
    <article className={ServicesBarStyle.services__bar}>
            <ul className={`${ServicesBarStyle.services__bar__ul} ul--reset`} >
                {Services.map((service,index)=>{
                    return <li key={"li" + index}>
                                <button onClick={()=>{
                                  window.scrollTo(0, service.link)
                                }} className={ServicesBarStyle.button} key={service + index} > 
                                    {service.name}
                                </button>
                           </li>
                })}
            </ul>
    </article>
  )
}

export default ServicesBar