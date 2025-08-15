import React from 'react'
import {useState} from 'react'
import {Question} from './preguntas'
import LogoGame from './assets/ruta_decisiva.jpg'
import LogoGameT from './assets/logo_y_texto.jpg'
import {yellow, lightblue, beige, deepblue} from './colores'
import { Fases } from './Fases.jsx'

export function Homepage({cambiarComponente}){



    return (
      <>

        <div className="grid justify-center">
          <div className="grid gap-2 justify-center">
            <div className="flex justify-center">
              <img className=" w-1/3 mt-10  rounded-full" src={LogoGame} alt="Image" />
            </div>
            <h1 style={{'color': deepblue, 'fontFamily': 'sansSerif'}} className="text-center text-3xl mt-10 text-purple-700">
              Bienvenido a "Ruta Decisiva"
            </h1>
            <h3>
              Un juego en el que cada decision es importante para tu personaje
            </h3>
          </div>

          <div className="grid justify-center items-center content-center gap-5">
            <label htmlFor="character-name" className="text-xl">
              Escribe el nombre de tu personaje
            </label>
            <input
              className="character-name text-center border-1 border-blue-600 rounded-lg bg-blue-300"
              type="text"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className=" bg-yellow-200 mb-10 p-3 rounded-lg"
              onClick={cambiarComponente}
            >
              Iniciar
            </button>
          </div>
        </div>

       
      </>
    );
}


