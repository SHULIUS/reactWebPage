import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Components/navBar_Container.jsx'
import Card from './Components/Card_Container.jsx'
import Frame_Container from './Components/Frame_Container.jsx'
import Footer_container from './Components/Footer_container.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <Nav/>
    <Card/>
    <Frame_Container/>
    <Footer_container/>
  </React.Fragment>
  
)
