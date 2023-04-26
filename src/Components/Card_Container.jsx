import React from 'react'
import img from '../img/IA.jpg'

export default function Card() {
    return (

        <div class="card container p-4 w-100">
        <div class="main-header ">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body align-items-center">
            <h5 class="card-title">LENGUAJES DE PROGRAMACIÓN</h5>
            <p class="card-text">Programación para el desarrollo de compentencias.</p>
          </div>
        </div>
      </div>
    )
}
