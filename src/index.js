import react from "react"
import readtDom from "react-dom"
import Head from "./header"
import Foot from "./footer"

readtDom.render(
  <div>
    <Head />
    <Foot />
    
  </div>,
  document.getElementById("root")
)