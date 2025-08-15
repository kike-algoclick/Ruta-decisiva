import React from "react";
import { Fases } from "./Fases.jsx";
import { useState } from "react";
import { Homepage, } from "./HomePage";

function App() {
    const [componenteActual, setCambiarComponente] = useState("inicio");

    const cambiarComponente = () => {
      setCambiarComponente("preguntas");
    }; 
  return (
    <div>
      {componenteActual === "inicio" && (
        <Homepage cambiarComponente={cambiarComponente} />
      )}
      {componenteActual === "preguntas" && <Fases />}
    </div>
  );
}

export default App;
