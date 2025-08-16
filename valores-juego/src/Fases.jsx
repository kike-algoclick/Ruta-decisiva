import React from "react";
import pequenoImg from './assets/pequeñoImg.jpg'
import Fondo from './assets/fondo.png'


export function Fases({ imagen, titulo, descripcion }) {
  return (
    <div className="flex flex-col items-center py-12 bg-white bg-opacity-80">
      <h4>{titulo}</h4>
      <p className="text-sm text-gray-500 mb-8 text-center max-w-md">{descripcion}</p>
      <div className="flex gap-6">
        <div className="flex flex-col items-center cursor-pointer hover:scale-170 transition-transform">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img src={imagen} alt={titulo} className="w-16 h-16 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}