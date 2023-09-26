let placasDeVideo = {
  "GTX 1080": 90,
  "RTX 2080": 95,
  "RX 5700 XT": 85,
};

function verificarRendimientoPlaca() {
  let nombrePlaca = prompt("Ingresa el nombre de tu placa de video:");

  if (placasDeVideo[nombrePlaca]) {
    alert("El rendimiento de tu " + nombrePlaca + " es de " + placasDeVideo[nombrePlaca] + " puntos.");
  } else {
    alert("No encontramos información para esa placa de video. Verifica el nombre.");
  }
}

let continuar = true;

while (continuar) {
  verificarRendimientoPlaca();
  let respuesta = prompt("¿Quieres verificar otra placa de video? (Sí/No)");

  if (respuesta.toLowerCase() === "si") {
    continuar = true;
  } else if(respuesta.toLowerCase() === "no") {
      alert ("Gracias por utilizar nuestra aplicacion!");
      continuar=false
    } else {
      alert ("Coloque una opcion valida")
    }
  }

