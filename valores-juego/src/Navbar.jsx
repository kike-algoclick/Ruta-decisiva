import React from 'react'
import LogoGameT from './assets/logo_y_texto.jpg'
import Home from './assets/home.svg'
import {yellow, lightblue, beige, deepblue} from './colores'
import { useState } from 'react'


export function Navbar({onHomeClick}){

    return (
      <div
        className=" fixed z-50 header h-15 px-4 py-2 flex items-center justify-between w-full"
        style={{ backgroundColor: yellow }}
      >
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-lg object-contain"
            src={LogoGameT}
            alt="Logo Ruta decisiva"
          />
          <span className="font-semibold text-lg hidden sm:block">
            Ruta decisiva
          </span>
        </div>
        {/* Botón Home a la derecha */}
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
        >
          <img className="w-6 h-6" src={Home} alt="Home" />
          <span className="font-bold">Home</span>
        </button>
      </div>
    );};