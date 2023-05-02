import React from 'react'

import Contactos from './Contact_container.jsx'
import Card from './Card_Container'
import Footer_container from './Footer_container'


export default function Contact() {
  return (
    <React.Fragment>
      <Card />
      <Contactos />
      <Footer_container/>
    </React.Fragment>


  )
}
