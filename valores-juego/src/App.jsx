import React from "react";
import { Fases } from "./Fases.jsx";
import { useState } from "react";
import { Homepage } from "./HomePage";
import { Navbar } from "./Navbar";
import { Preguntas } from "./preguntas";


import infanciaImg from './assets/pequeñoImg.jpg';
import escuelaImg from './assets/school.jpg';
import universidadImg from './assets/universidad.jpg';
import trabajoImg from './assets/trabajo.jpg';
import vejezImg from './assets/vejez.jpg';
import fondo from './assets/fondo.png';

function App() {
  const [componenteActual, setComponenteActual] = useState("inicio");
  const [faseSeleccionada, setFaseSeleccionada] = useState(null);
  const [preguntasActuales, setPreguntasActuales] = useState([]);

  const preguntasPorFase = [
    ["¿Cuál es tu recuerdo favorito de la infancia?", "¿Qué aprendiste jugando?"],
    ["¿Qué decisión importante tomaste en la escuela?", "¿Quién fue tu mejor amigo?"],
    ["¿Cuál fue tu mayor reto en la universidad?", "¿Qué sueño perseguías?"],
    ["¿Qué responsabilidad asumiste en el trabajo?", "¿Cómo construiste tu camino?"],
    ["¿Qué experiencia valiosa compartes en la vejez?", "¿Qué consejo darías a los jóvenes?"]
  ];

  const fasesData = [
    {
      imagen: infanciaImg,
      titulo: "Infancia",
      descripcion: "Descubre el mundo a través de la curiosidad y el juego.",
      preguntas: preguntasPorFase[0],
    },
    {
      imagen: escuelaImg,
      titulo: "En la escuela",
      descripcion: "Explora con tus amigos y toma decisiones más importantes",
      preguntas: preguntasPorFase[1],
    },
    {
      imagen: universidadImg,
      titulo: "Universidad",
      descripcion:
        "Descubre nuevos retos y tareas grandes que tendrán peso en tu futuro ",
      preguntas: preguntasPorFase[2],
    },
    {
      imagen: trabajoImg,
      titulo: "El trabajo",
      descripcion: "Asume responsabilidades mas importantes que serán importantes para tu vida ",
      preguntas: preguntasPorFase[3],
    },
    {
      imagen: vejezImg,
      titulo: "Vejez",
      descripcion: "Disfruta de la sabiduría y comparte tus experiencias.",
      preguntas: preguntasPorFase[4],
    },
  ];

  const cambiarComponente = () => {
    setComponenteActual("fases");
  };

  const irAHome = () => {
    setComponenteActual("inicio");
  };

  const handleFaseClick = (fase) => {
    setFaseSeleccionada(fase);
    setPreguntasActuales(fase.preguntas);
    setComponenteActual("preguntas");
  };

  return (
    <div>
      <Navbar onHomeClick={irAHome} />
      {componenteActual === "inicio" && (
        <Homepage cambiarComponente={cambiarComponente} />
      )}
      {componenteActual === "fases" &&
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

          <div className="flex flex-wrap justify-center items-center">
            {fasesData.map((fase, idx) => (
              <Fases
                key={idx}
                imagen={fase.imagen}
                titulo={fase.titulo}
                descripcion={fase.descripcion}
                onClick={() => handleFaseClick(fase)}
              />
            ))}
          </div>
        </div>
      }
      {componenteActual === "preguntas" && (
        <Preguntas preguntas={preguntasActuales} fase={faseSeleccionada} />
      )}
    </div>
  );
  }

export default App;
