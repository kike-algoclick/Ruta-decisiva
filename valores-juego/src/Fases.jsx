import React from "react";
import infanciaImg from './assets/pequeñoImg.jpg';
import escuelaImg from './assets/school.jpg';
import universidadImg from './assets/universidad.jpg';
import trabajoImg from './assets/trabajo.jpg';
import vejezImg from './assets/vejez.jpg';

export function Fases({ imagen, titulo, descripcion, onClick }) {
  return (
    <div className="overflow-y auto pt-20">
      <div className="flex flex-col items-center py-10 px-6 bg-white bg-opacity-80 rounded-xl shadow-lg m-6 w-80 max-w-xs">
        <h4 className="text-lg font-semibold mb-2 text-blue-900">{titulo}</h4>
        <p className="text-sm text-gray-600 mb-6 text-center max-w-xs">
          {descripcion}
        </p>
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-blue-200 mb-2">
          <img src={imagen} alt={titulo} className="w-20 h-20 object-contain" />
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
          onClick={onClick}
        >
          Ir a preguntas
        </button>
      </div>
    </div>
  );
}