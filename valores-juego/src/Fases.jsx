import React from "react";
import infanciaImg from './assets/pequeñoImg.jpg';
import escuelaImg from './assets/school.jpg';
import universidadImg from './assets/universidad.jpg';
import trabajoImg from './assets/trabajo.jpg';
import vejezImg from './assets/vejez.jpg';

export function Fases({ imagen, titulo, descripcion, onClick, completada }) {
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
          className={`mt-4 px-6 py-2 rounded-full shadow transition-colors ${completada ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          onClick={completada ? undefined : onClick}
          disabled={completada}
        >
          {completada ? 'Fase completada' : 'Ir a preguntas'}
        </button>
      </div>
    </div>
  );
}