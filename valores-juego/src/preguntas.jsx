import React, { useState } from "react";

// Ejemplo de preguntas relacionadas por fase
const preguntasPorFaseRelacionadas = [
  [
    //Fase 1
    {
      texto:
        "Estas en tu casa y tu madre te pide que guardes los juguetes, ¿qué haces?",
      opciones: [
        {
          opcion1: "Le haces caso a tu madre y decides guardar los juguetes.",
          puntaje: 10,
          mensaje: "Tu madre te felicitó y te compró tu helado favorito.",
        },
        {
          opcion2: "Decides esconder los juguetes debajo de tu cama.",
          puntaje: -10,
          mensaje:
            "Tu madre descubrió que escondiste tus juguetes y te castigo sin salir por 1 semana.",
        },
      ],
    },
    {
      texto:
        "Ahora estas jugando con tu mejor amigo, el te golpea con un juguete, ¿qué eliges hacer?",
      opciones: [
        {
          opcion1:
            "No te enojas con tu amigo y lo perdonas, sabes que fue un accidente.",
          puntaje: 10,
          mensaje: "Buena elección, tu relación con tu mejor amigo es genial.",
        },
        {
          opcion2:
            "Te enojas con el y pelean. Tu mejor amigo pide que lo lleven a casa furioso.",
          puntaje: -10,
          mensaje:
            "Dejan de ser amigos y pasas bastante tiempo solo en la escuela",
        },
      ],
    },
  ],

  //Fase 2
  [
    {
      texto:
        "Hoy tienes un dia de clases en la escuela pero no quieres ir. ¿Qué decides?",
      opciones: [
        {
          opcion1:
            "Te levantas temprano y vas a la escuela a estudiar, eres muy responsable.",
          puntaje: 15,
          mensaje:
            "Ese dia  dejan una tarea. La haces, la entregas y sacas 10. ¡Bien hecho!",
        },
        {
          opcion2: "Te quedas dormido en la casa y decides no ir a estudiar.",
          puntaje: -5,
          mensaje:
            "Ese día el profesor explico un tema importante que saldrá en el examen. Te perdiste la clase.",
        },
        {
          opcion3: "Finges que estas enfermo para no ir a la escuela.",
          puntaje: -10,
          mensaje:
            "El día que vas a clases tratas de entregar una tarea pero, no te la reciben ya que no tienes constancia médica.",
        },
      ],
    },

    {
      texto:
        "Mañana tienes un examen muy importante pero tus amigos te invitaron a pasar toda la noche jugando videojuegos. ¿Que harás?",
      opciones: [
        {
          opcion1:
            "Decides rechazar la oferta y estudias toda la noche para el examen.",
          puntaje: 10,
          mensaje:
            "Estabas preparado para el examen y aprobaste pero, tus amigos no aprobaron. Sabes cuales con tus prioridades. ¡Eres muy bueno decidiendo!",
        },
        {
          opcion2:
            "Aceptas la oferta de jugar con tus amigos y pasas toda la noche con ellos.",
          puntaje: -15,
          mensaje:
            "Jugar te pasa factura y el día de el examen no sabes que responder. Repruebas el examen",
        },
        {
          opcion3:
            "Decides organizarte. Juegas un rato con tus amigos y luego regresas a casa a estudiar",
          puntaje: 15,
          mensaje:
            "Decidiste un punto medio. Aprobaste el examen y tuviste tiempo de diversión. ¡Felicidades!",
        },
      ],
    },
  ],

  //Fase 3
  [
    {
      texto:
        "Te ofrecen una beca para estudiar en otro país, pero tienes miedo, ¿qué harás?",

      opciones: [
        {
          opcion1: "Tomas valentia y aceptas la beca a pesar de el miedo",
          puntaje: 20,
          mensaje:
            "Conviertes tu vida en una aventura académica. Tu vida cambió pero te acostrumbras",
        },
        {
          opcion2: "La pospones para enfocarte en tu emprendimiento",
          puntaje: -10,
          mensaje:
            "Al no aceptarla perdiste la oportunidad. Más adelante tratas de conseguirla otra vez pero, ya no está disponible",
        },
      ],
    },

    {
      texto:
        " Tu pareja quiere que dejes la universidad para mudarte. Tu decides:",

      opciones: [
        {
          opcion1: "Le explicas que tu prioridad es terminar tus estudios",
          puntaje: 15,
          mensaje:
            " Tu pareja entendió tu opinión y tus metas. La relación se vuelve tensa pero madura.",
        },
        {
          opcion2: "La pospones para enfocarte en tu emprendimiento",
          puntaje: -10,
          mensaje:
            "Ganas independencia emocional, pero sufres un bajón temporal. Esto te afecta un poco en tu universidad pero lo superas",
        },
      ],
    },
    {
      texto:
        "Vas bien en tus estudios pero tu familia ya no puede apoyarte económicamente. Tu decides:",

      opciones: [
        {
          opcion1:
            "Buscas rápido un trabajo de medio tiempo para cubrir tus estudios",
          puntaje: 10,
          mensaje: "",
        },
        {
          opcion2: "La pospones para enfocarte en tu emprendimiento",
          puntaje: -10,
          mensaje:
            "Al no aceptarla perdiste la oportunidad. Más adelante tratas de conseguirla otra vez pero, ya no está disponible",
        },
        {
          opcion3: "La pospones para enfocarte en tu emprendimiento",
          puntaje: -10,
          mensaje:
            "Al no aceptarla perdiste la oportunidad. Más adelante tratas de conseguirla otra vez pero, ya no está disponible",
        },
      ],
    },
  ],

  //Fase 4

  [
    {
      texto: "¿Qué valor es clave en el trabajo?",
      opciones: ["Responsabilidad", "Honestidad", "Colaboración"],
    },
    {
      texto: "¿Cómo tomas decisiones laborales?",
      opciones: ["Consultando", "Analizando", "Siguiendo valores"],
    },
  ],

  //Fase 5

  [
    {
      texto: "¿Qué valor te ha guiado en la vejez?",
      opciones: ["Sabiduría", "Paciencia", "Generosidad"],
    },
    {
      texto: "¿Qué consejo darías a los jóvenes?",
      opciones: ["Ser honestos", "Ser perseverantes", "Ser empáticos"],
    },
  ],
];

export function Preguntas({ fase, preguntas, puntaje, setPuntaje, volverAFases }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);

	// Determinar el índice de la fase
	const faseIdx = fase && fase.titulo
		? ["Infancia", "En la escuela", "Universidad", "El trabajo", "Vejez"].indexOf(fase.titulo)
		: 0;
	const preguntasRelacionadas = preguntasPorFaseRelacionadas[faseIdx] || [];
	const preguntaObj = preguntasRelacionadas[preguntaActual];
	const terminado = preguntaActual >= preguntasRelacionadas.length;

	const [mensaje, setMensaje] = useState("");
	const [mostrarMensaje, setMostrarMensaje] = useState(false);

	const avanzarPregunta = () => {
		const opcionSeleccionada = preguntaObj.opciones[seleccion];
		if (typeof opcionSeleccionada === 'object' && opcionSeleccionada.puntaje !== undefined) {
			setPuntaje(puntaje + opcionSeleccionada.puntaje);
			setMensaje(opcionSeleccionada.mensaje || "");
			setMostrarMensaje(true);
		} else {
			setMensaje("");
			setMostrarMensaje(false);
		}
		setSeleccion(null);
		// Solo avanzar si no hay mensaje, si hay mensaje mostrarlo y avanzar en el siguiente click
		if (typeof opcionSeleccionada === 'object' && opcionSeleccionada.mensaje) {
			// Esperar a que el usuario vea el mensaje antes de avanzar
			return;
		}
		setPreguntaActual(preguntaActual + 1);
	};

	return (
    
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Botón de volver y puntaje arriba a la derecha */}
        <div className=" mt-15 absolute top-6 right-8 z-10 flex gap-4">
          <div className="bg-blue-600 text-white rounded-lg shadow-lg px-6 py-3 text-lg font-bold">
            Puntaje: {puntaje}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-xl shadow-xl p-8 mx-4 mt-16 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            {fase ? fase.titulo : "Fase"}
          </h2>
								{!terminado && preguntaObj ? (
									<>
										<div className="mb-6 text-lg font-semibold text-gray-800 text-center">
											{preguntaObj.texto}
										</div>
										<div className="flex flex-col gap-4 mb-6 w-full">
											{preguntaObj.opciones.map((op, idx) => {
												let texto = typeof op === 'object' ? (op.opcion1 || op.opcion2 || op.opcion3 || JSON.stringify(op)) : op;
												return (
													<label
														key={idx}
														className="flex items-center gap-2 cursor-pointer"
													>
																				<input
																					type="radio" name="opcion" value={idx} checked={seleccion === idx} onChange={() => setSeleccion(idx)}
																					disabled={seleccion !== null && (!mostrarMensaje && mensaje === "" || mostrarMensaje)}
																				/>
														<span className="text-gray-700">{texto}</span>
													</label>
												);
											})}
										</div>
										{/* Mostrar mensaje solo después de presionar avanzar y si existe */}
										{mostrarMensaje && mensaje && (
											<div className="mb-4 text-base text-blue-700 font-semibold text-center">
												{mensaje}
											</div>
										)}
										<button
											className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
											onClick={() => {
												if (mostrarMensaje) {
													setMostrarMensaje(false);
													setMensaje("");
													setPreguntaActual(preguntaActual + 1);
												} else {
													avanzarPregunta();
												}
											}}
											disabled={seleccion === null && !mostrarMensaje}
										>
											{mostrarMensaje ? "Siguiente" : "Avanzar"}
										</button>
									</>
                ) : (
                  <div className="flex flex-col items-center gap-6">
                    <div className="text-xl font-bold text-green-700">Fase completada</div>
                    <button
                      className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-800 transition-colors"
                      onClick={volverAFases}
                    >
                      Siguiente fase
                    </button>
                  </div>
                )}
        </div>
      </div>
    
  );
}
