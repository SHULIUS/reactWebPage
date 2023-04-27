import React from 'react'
import img from '../img/logo.jpg'
import '../App.css'


export default function Nav() {
  return (
    /* navBar Container  */

    <nav class="navbar navbar-expand-lg navbar-dark navbar-expand-md bg-primary">
    <div class="container-fluid">
      <img class="nav-item" src={img} alt="Logo" width="70" />
      <div class="container-fluid.right">
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Login</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
  
  )
}
