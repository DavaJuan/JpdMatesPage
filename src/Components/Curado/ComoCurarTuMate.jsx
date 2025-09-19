import paso1 from "./img/paso1.png";
import paso2 from "./img/paso2.png";
import paso3 from "./img/paso3.png";
import paso4 from "./img/paso4.png";
import paso5 from "./img/paso5.png";

export default function ComoCurarTuMate() {
  const pasos = [
    {
      titulo: "Paso 1: Preparar la Yerba para el Curado",
      texto:
        "Comienza seleccionando una yerba mate usada (puede ser de un mate anterior). No es necesario que esté fresca, pero debe estar húmeda. Esto ayudará a que el mate absorba los sabores y se cure adecuadamente.",
      img: paso1,
    },
    {
      titulo: "Paso 2: Llenar el Mate con Yerba Húmeda",
      texto:
        "Llena el mate de calabaza con la yerba mate húmeda. Asegúrate de que quede bien compacto, pero sin presionar excesivamente..",
      img: paso2,
    },
    {
      titulo: "Paso 3: Añadir Agua Tibia",
      texto:
        "Vierte agua a termperatura mate (no hirviendo) sobre la yerba dentro del mate, hasta que esté completamente saturada. El agua tibia ayuda a que la calabaza se impregne de los sabores de la yerba y se suavice.",
      img: paso3,
    },
    {
      titulo: "Paso 4: Dejar Reposar el Mate",
      texto:
        "Una vez lleno con yerba húmeda y agua tibia, deja reposar el mate durante al menos 24 horas. Esto permite que la calabaza se cure y se impregne de los sabores de la yerba, sellando sus poros y evitando futuros sabores indeseados.",
      img: paso4,
    },
    {
      titulo: "Paso 5: Vaciar y Raspar el Interior",
      texto:
        "Pasadas las 24 horas de reposo, vacía completamente el mate. Con la ayuda de una cuchara pequeña, raspa suavemente las paredes internas de la calabaza para remover el hollejo o los restos blandos de la pulpa. Asegúrate de eliminar todos los residuos sueltos.",
      img: paso5,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Cómo curar tu mate
      </h1>

      <div className="space-y-12">
        {pasos.map((paso, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {paso.titulo}
            </h2>
            <p className="text-base md:text-lg text-gray-700">{paso.texto}</p>
            <img
              src={paso.img}
              alt={paso.titulo}
              className="w-full md:w-3/4 lg:w-2/3 rounded-2xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
