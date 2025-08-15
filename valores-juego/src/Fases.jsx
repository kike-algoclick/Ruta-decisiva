import React from "react";


export function Fases(){
    
    return (
      <div>
        <div className="flex flex-col items-center py-12 bg-white">
          {/* Título y descripción */}
          <h2 className="text-2xl font-bold mb-2">Elige tu camino</h2>
          <p className="text-sm text-gray-500 mb-8 text-center max-w-md">
            Selecciona una etapa de la vida para comenzar tu aventura. Cada
            etapa presenta decisiones y desafíos únicos.
          </p>

          {/* Contenedor de etapas */}
          <div className="flex gap-6">
            
              <div
              
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    
                    alt="HOla"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium"></span>
              </div>
            
          </div>
        </div>
      </div>
    );
}