// Función para generar un valor de rendimiento aleatorio entre 0 y 100
function generarRendimientoAleatorio() {
  return Math.floor(Math.random() * 101);
}

// Declaración de las variables con placas de video ficticias, valores de rendimiento, memoria RAM y núcleos
let nvidiaGPU1 = { nombre: 'NVIDIA GeForce RTX 3090', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '24GB', nucleos: 10496 };
let nvidiaGPU2 = { nombre: 'NVIDIA GeForce GTX 1660 Ti', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '6GB', nucleos: 1536 };
let nvidiaGPU3 = { nombre: 'NVIDIA Quadro P5000', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '16GB', nucleos: 2560 };
let nvidiaGPU4 = { nombre: 'NVIDIA GeForce RTX 2080 Super', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '8GB', nucleos: 3072 };
let nvidiaGPU5 = { nombre: 'NVIDIA GeForce GTX 1050', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '4GB', nucleos: 640 };

let amdGPU1 = { nombre: 'AMD Radeon RX 6900 XT', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '16GB', nucleos: 5120 };
let amdGPU2 = { nombre: 'AMD Radeon RX 5700 XT', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '8GB', nucleos: 2560 };
let amdGPU3 = { nombre: 'AMD Radeon RX 6800', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '16GB', nucleos: 3840 };
let amdGPU4 = { nombre: 'AMD Radeon RX 5600 XT', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '6GB', nucleos: 2304 };
let amdGPU5 = { nombre: 'AMD Radeon RX 5500', rendimiento: generarRendimientoAleatorio(), memoriaRAM: '4GB', nucleos: 1408 };

// Crear un array con los datos de las placas de video
let placasDeVideo = [
  nvidiaGPU1,
  nvidiaGPU2,
  nvidiaGPU3,
  nvidiaGPU4,
  nvidiaGPU5,
  amdGPU1,
  amdGPU2,
  amdGPU3,
  amdGPU4,
  amdGPU5
];

// Función para buscar una placa de video aleatoria en el array
function buscarPlacaAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * placasDeVideo.length);
  return placasDeVideo[indiceAleatorio];
}

// Función para verificar el rendimiento de una placa de video
// function verificarRendimientoPlaca() {
//   let nombrePlaca = prompt("Ingresa el nombre de tu placa de video:");

//   const placaEncontrada = placasDeVideo.find(placa => placa.nombre.toLowerCase() === nombrePlaca.toLowerCase());

//   if (placaEncontrada) {
//     alert("El rendimiento de tu " + placaEncontrada.nombre + " es de " + placaEncontrada.rendimiento + " puntos.");
//   } else {
//     alert("No encontramos información para esa placa de video. Verifica el nombre.");
//   }
// }

// codigo viejo ENTREGA 2

// let continuar = true;

// while (continuar) {
//   verificarRendimientoPlaca();
//   let respuesta = prompt("¿Quieres verificar otra placa de video? (Sí/No)");

//   if (respuesta.toLowerCase() === "si") {
//     continuar = true;
//   } else if (respuesta.toLowerCase() === "no") {
//     alert("Gracias por utilizar nuestra aplicación!");
//     continuar = false;
//   } else {
//     alert("Coloca una opción válida");
//   }
// }


// Variables para llevar un registro de las placas seleccionadas por el usuario
let placaSeleccionada1 = null;
let placaSeleccionada2 = null;

// Función para manejar el clic en las imágenes
function seleccionarPlaca(placa) {
  if (!placaSeleccionada1) {
    placaSeleccionada1 = placa;
  } else if (!placaSeleccionada2) {
    placaSeleccionada2 = placa;
    compararPlacas(); // Llamar a la función de comparación
  }
}

// Función para comparar dos placas de video
function compararPlacas() {
  if (placaSeleccionada1 && placaSeleccionada2) {
    // Obtener las estadísticas de rendimiento de las placas seleccionadas
    const rendimiento1 = placaSeleccionada1.rendimiento;
    const rendimiento2 = placaSeleccionada2.rendimiento;

// Crear un objeto JSON con los detalles de la comparación
    const comparacionData = {
      placa1: placaSeleccionada1,
      placa2: placaSeleccionada2,
      resultado: `Comparación de rendimiento: ${placaSeleccionada1.nombre} (${rendimiento1} puntos) vs. ${placaSeleccionada2.nombre} (${rendimiento2} puntos)`
    };

    // Guardar los detalles en LocalStorage
    localStorage.setItem('comparacion', JSON.stringify(comparacionData));

    // Crear un nuevo div para mostrar los resultados de la comparación
    const comparacionDiv = document.createElement("div");
    comparacionDiv.classList.add("comparacion");

    // Calcular y mostrar los resultados
    const resultado = document.createElement("p");
    resultado.textContent = `Comparación de rendimiento:
      ${placaSeleccionada1.nombre} (${rendimiento1} puntos) vs. 
      ${placaSeleccionada2.nombre} (${rendimiento2} puntos)`;

    // Agregar el resultado de la comparación al documento
    comparacionDiv.appendChild(resultado);
    document.body.appendChild(comparacionDiv);

    // Restablecer las variables para permitir nuevas comparaciones
    placaSeleccionada1 = null;
    placaSeleccionada2 = null;
  }
}

// Agregar eventos de clic a las imágenes
const imagenes = document.querySelectorAll(".fondoborroso img");
imagenes.forEach((imagen, index) => {
  imagen.addEventListener("click", () => {
    const placa = placasDeVideo[index];
    seleccionarPlaca(placa);
  });
});

function mostrarComparacionGuardada() {
  const comparacionData = localStorage.getItem('comparacion');
  if (comparacionData) {
    const comparacion = JSON.parse(comparacionData);

    const comparacionDiv = document.createElement("div");
    comparacionDiv.classList.add("comparacion");
    const resultado = document.createElement("p");
    resultado.textContent = comparacion.resultado;
    comparacionDiv.appendChild(resultado);
    document.body.appendChild(comparacionDiv);
  }
}

// Llama a esta función al cargar la página para mostrar la comparación almacenada
mostrarComparacionGuardada();




