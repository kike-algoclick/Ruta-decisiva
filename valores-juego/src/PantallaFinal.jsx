import React from "react";

export function PantallaFinal({ puntaje, onVolverAJugar }) {
  // Ejemplo de lógica para reflexión según puntaje
  let reflexion = "";
  if (puntaje >= 80) {
    reflexion = "WoW, parece que eres un crack tomando decisiones. Todas esas te han llevado hasta el lugar en el que te encuentras ahora mismo";
  } else if (puntaje >= 40) {
    reflexion = "Gran trabajo tomando decisiones complicadas. A veces suele ser difícil pero se que con práctica aprenderás a tomar mejores decisiones";
  } else {
    reflexion = "Hiciste un buen trabajo tomando decisiones, sin embargo; sé que puedes dar más de ti. Vuelve a jugar para obtener mejores resultados";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-xl shadow-xl p-8 mx-4 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">¡Juego terminado!</h2>
        <div className="text-xl font-semibold text-gray-800 mb-4">
          Puntos obtenidos: <span className="text-green-700">{puntaje}</span>
        </div>
        <div className="mb-8 text-lg text-gray-700 text-center">
          {reflexion}
        </div>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
          onClick={onVolverAJugar}
        >
          Volver a jugar
        </button>
      </div>
    </div>
  );
}
