import React from 'react'
import { app } from '../fb.js';
import '../login.css';
import Footer_container from './Footer_container'

export default function Login() {

  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password)=>{
    app
    .auth().createUserWithEmailAndPassword(correo, password)
    .then((usuarioFirebase)=>{
     window.alert("Usuario Creado" ,usuarioFirebase);
     props.setUsuario(usuarioFirebase);
    });
  }
  
  const iniciarSesion = (correo, password) =>{
    app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase)=>{
      window.alert("Sesion iniciada con: " + correo, usuarioFirebase.user);
      props.setUsuario(usuarioFirebase);
    })
  }


  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
     
    if(isRegistrando){
       crearUsuario(correo, password);
    }
    if (!isRegistrando){
       iniciarSesion(correo, password);
    }
  }
  return (
    <div className="contenedor">
      <div className="form-container">
        <h1>{isRegistrando ? 'Regístrate' : 'Inicia sesión'}</h1>
        <form onSubmit={submitHandler}>
          <input type="email" name="" placeholder="Email..." id="emailField" />
          <br />
          <input type="password" name="" placeholder="Password..." id="passwordField" />
          <br />
          <button type="submit" value="">
            {isRegistrando ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </form>
        <button className="toggle-button" onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando
            ? '¿Ya tienes cuenta? ¡Inicia sesión!'
            : '¿No tienes cuenta? ¡Regístrate gratis!'}
        </button>
      </div>
      
    </div>
     


    

  )
}
