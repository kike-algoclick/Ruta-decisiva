import React from 'react'
import {useState} from 'react'
import LogoGame from './assets/ruta_decisiva.jpg'
import LogoGameT from './assets/logo_y_texto.jpg'
import {yellow, lightblue, beige, deepblue} from './colores'
import { Fases } from './Fases.jsx'

export function Homepage({cambiarComponente}){



    return (
      <>
        <div className="grid justify-center gap-2">
          <div className="grid gap-2 justify-center">
            <div className="flex justify-center">
              <img
                className=" w-1/3 mt-10  rounded-full"
                src={LogoGame}
                alt="Image"
              />
            </div>
            <h1
              style={{ color: deepblue, fontFamily: "sansSerif" }}
              className="text-center text-3xl mt-10 text-purple-700"
            >
              Bienvenido a "Ruta Decisiva"
            </h1>
            <h3>
              Un juego en el que cada decisión es importante para tu personaje
            </h3>
          </div>
          <div><h2 className="flex justify-center text-2xl">Iniciemos la Aventura</h2></div>
          <div className="flex justify-center mt-10">
            <button
              className="hover:scale-130 bg-yellow-200 mb-10 p-3 rounded-lg"
              onClick={cambiarComponente}
            >
              Iniciar
            </button>
          </div>
        </div>
      </>
    );
}


