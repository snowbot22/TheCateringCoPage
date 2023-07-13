import React from "react"
import * as WsspStyles from "../assets/css/WsspButton.module.css"
import WsspImage from "../images/wsspButton.png"

function WsspButton() {
  return <div className={WsspStyles.wsspButton}>
    <a href="https://wa.me/593982555079">
        <figure className={WsspStyles.figure}>
            <img className="img--large" src={WsspImage} alt="wssp" />
        </figure>
    </a>
  </div>
}

export default WsspButton
