import React, { useState } from "react";

// Ejemplo de preguntas relacionadas por fase
const preguntasPorFaseRelacionadas = [
	[
		{
			texto: "¿Qué valor consideras más importante en la infancia?",
			opciones: ["Curiosidad", "Honestidad", "Respeto"],
		},
		{
			texto: "¿Qué aprendiste jugando?",
			opciones: ["Cooperación", "Empatía", "Perseverancia"],
		},
	],
	[
		{
			texto: "¿Qué valor te enseñaron en la escuela?",
			opciones: ["Responsabilidad", "Solidaridad", "Justicia"],
		},
		{
			texto: "¿Cómo resuelves un conflicto con amigos?",
			opciones: ["Dialogando", "Ignorando", "Buscando ayuda"],
		},
	],
	[
		{
			texto: "¿Qué valor te ayudó en la universidad?",
			opciones: ["Perseverancia", "Respeto", "Tolerancia"],
		},
		{
			texto: "¿Cómo enfrentas los retos académicos?",
			opciones: ["Organización", "Trabajo en equipo", "Motivación"],
		},
	],
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

export function Preguntas({ fase, onVolver }) {
	const [preguntaActual, setPreguntaActual] = useState(0);
	const [seleccion, setSeleccion] = useState("");
	const [puntaje, setPuntaje] = useState(0);

	// Determinar el índice de la fase
	const faseIdx = fase && fase.titulo
		? ["Infancia", "En la escuela", "Universidad", "El trabajo", "Vejez"].indexOf(fase.titulo)
		: 0;
	const preguntasRelacionadas = preguntasPorFaseRelacionadas[faseIdx] || [];
	const preguntaObj = preguntasRelacionadas[preguntaActual];
	const terminado = preguntaActual >= preguntasRelacionadas.length;

	const avanzarPregunta = () => {
		setPreguntaActual(preguntaActual + 1);
		setSeleccion("");
		setPuntaje(puntaje + 1); // ejemplo: suma 1 punto por cada pregunta respondida
	};

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center">
			{/* Botón de volver y puntaje arriba a la derecha */}
			<div className="absolute top-6 right-8 z-10 flex gap-4">
				<button
					className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2 font-bold shadow hover:bg-gray-400"
					onClick={onVolver}
				>
					Volver
				</button>
				<div className="bg-blue-600 text-white rounded-lg shadow-lg px-6 py-3 text-lg font-bold">
					Puntaje: {puntaje}
				</div>
			</div>
			<div className="flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-xl shadow-xl p-8 mx-4 mt-16 w-full max-w-xl">
				<h2 className="text-2xl font-bold text-blue-900 mb-6">{fase ? fase.titulo : "Fase"}</h2>
				{!terminado && preguntaObj ? (
					<>
						<div className="mb-6 text-lg font-semibold text-gray-800 text-center">{preguntaObj.texto}</div>
						<div className="flex flex-col gap-4 mb-6 w-full">
							{preguntaObj.opciones.map((op, idx) => (
								<label key={idx} className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										name="opcion"
										value={op}
										checked={seleccion === op}
										onChange={() => setSeleccion(op)}
									/>
									<span className="text-gray-700">{op}</span>
								</label>
							))}
						</div>
						<button
							className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
							onClick={avanzarPregunta}
							disabled={!seleccion}
						>
							Avanzar
						</button>
					</>
				) : (
					<div className="text-xl font-bold text-green-700">¡Has terminado todas las preguntas!</div>
				)}
			</div>
		</div>
	);
}
