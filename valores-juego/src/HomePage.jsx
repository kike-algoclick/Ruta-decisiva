import React from 'react'
import {useState} from 'react'
import LogoGame from './assets/ruta_decisiva.jpg'
import LogoGameT from './assets/logo_y_texto.jpg'
import {yellow, lightblue, beige, deepblue} from './colores'
import { Fases } from './Fases.jsx'
import bImage from './assets/InicioPag.jpg'

export function Homepage({cambiarComponente}){
  return (
    <>
      {/* Fondo fijo en toda la página */}
      <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', backgroundImage: `url(${bImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1}} />
      {/* Contenido principal */}
      <div className="grid z-50 justify-center gap-2 overflow-y-auto pt-20 min-h-screen">
        <div className="grid gap-2 justify-center">
          <div className="flex justify-center">
            <img
              className="w-1/3 mt-10 rounded-full"
              src={LogoGame}
              alt="Image"
            />
          </div>
          <h1
            style={{ color: deepblue, fontFamily: "sansSerif" }}
            className="text-center text-4xl mt-10 text-blue-800"
          >
            Bienvenido a "Ruta Decisiva"
          </h1>
          <h3 className="text-xl">
            Un juego en el que cada decisión es importante para tu vida
          </h3>
        </div>
        <div>
          <h2 className="flex justify-center text-2xl">
            ¡Iniciemos la aventura!
          </h2>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className=" h-12 hover:scale-130 bg-yellow-200 mb-10 p-3 rounded-lg"
            onClick={cambiarComponente}
          >
            Iniciar
          </button>
        </div>
      </div>
    </>
  );
}


