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


// Función para comparar las placas ingresadas
function compararPlacas() {
  const placa1Nombre = document.getElementById("placa1Input").value;
  const placa2Nombre = document.getElementById("placa2Input").value;

  const placa1 = placasDeVideo.find(placa => placa.nombre === placa1Nombre);
  const placa2 = placasDeVideo.find(placa => placa.nombre === placa2Nombre);

  if (placa1 && placa2) {
    const resultadoDiv = document.getElementById("resultadoComparacion");
    resultadoDiv.innerHTML = `
      <p>Rendimiento:</p>
      <ul>
          <li>${placa1.nombre}: ${placa1.rendimiento} puntos</li>
          <li>${placa2.nombre}: ${placa2.rendimiento} puntos</li>
      </ul>
      <p>Memoria RAM:</p>
      <ul>
          <li>${placa1.nombre}: ${placa1.memoriaRAM}</li>
          <li>${placa2.nombre}: ${placa2.memoriaRAM}</li>
      </ul>
      <p>Núcleos:</p>
      <ul>
          <li>${placa1.nombre}: ${placa1.nucleos}</li>
          <li>${placa2.nombre}: ${placa2.nucleos}</li>
      </ul>
    `;
  }
}

// evento de click al botón "Comparar"
const compararBtn = document.getElementById("compararBtn");
compararBtn.addEventListener("click", compararPlacas);



