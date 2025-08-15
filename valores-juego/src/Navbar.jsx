import React from 'react'
import LogoGameT from './assets/logo_y_texto.jpg'
import Home from './assets/home.svg'
import {yellow, lightblue, beige, deepblue} from './colores'

export function Navbar(){


    return (
      <>
        <div className="header h-15 p-2 justify" style={{ backgroundColor: yellow }}>
          <nav className="flex justify-between items-center">
            <ul className="w-30% ml-10 flex items-center gap-4">
              <img className="w-10  " src={LogoGameT} alt="" />
              <div>Ruta decisiva</div>
            </ul>

            <ul className="grid justify-center items-center content-center">
              <div className="flex justify-center"> 
                <img className="w-8 flex justify-center" src={Home} alt="" />
              </div>
              <div className="flex justify-center"><strong>Home</strong></div>
            </ul>
            <ul></ul>
          </nav>
        </div>
      </>
    );};