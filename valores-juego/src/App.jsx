import React from "react";
import { Fases } from "./Fases.jsx";
import { useState } from "react";
import { Homepage, } from "./HomePage";

import pequenoImg from './assets/pequeñoImg.jpg';
import logoTexto from './assets/logo_y_texto.jpg';
import rutaDecisiva from './assets/ruta_decisiva.jpg';
import fondo from './assets/fondo.png';

function App() {
  const [componenteActual, setCambiarComponente] = useState("inicio");

  const cambiarComponente = () => {
    setCambiarComponente("preguntas");
  };

  // Datos para las 5 fases
  const fasesData = [
    {
      imagen: pequenoImg,
      titulo: "Infancia",
      descripcion: "Descubre el mundo a través de la curiosidad y el juego.",
    },
    {
      imagen: logoTexto,
      titulo: "Adolescencia",
      descripcion: "Explora tu identidad y toma decisiones importantes.",
    },
    {
      imagen: rutaDecisiva,
      titulo: "Juventud",
      descripcion: "Persigue tus sueños y enfrenta nuevos retos.",
    },
    {
      imagen: fondo,
      titulo: "Adultez",
      descripcion: "Asume responsabilidades y construye tu camino.",
    },
    {
      imagen: pequenoImg,
      titulo: "Vejez",
      descripcion: "Disfruta de la sabiduría y comparte tus experiencias.",
    },
  ];

  return (
    <div>
      {componenteActual === "inicio" && (
        <Homepage cambiarComponente={cambiarComponente} />
      )}
      {componenteActual === "preguntas" && (
        <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
          <div
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
              zIndex: -1,
            }}
          />
          {fasesData.map((fase, idx) => (
            <Fases
              key={idx}
              imagen={fase.imagen}
              titulo={fase.titulo}
              descripcion={fase.descripcion}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
