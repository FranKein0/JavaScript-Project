// Import para que funcione Toastify
import Toastify from 'toastify-js';

// Función para cargar el archivo JSON
fetch('api.json')
.then(response => response.json())
.then(data => {
    const placasDeVideoJSON = data;

    // Variables para llevar un registro de las placas seleccionadas por el usuario
    let placaSeleccionada1 = null;
    let placaSeleccionada2 = null;

    // Función para manejar el clic en las imágenes
    function seleccionarPlaca(placa) {
        if (!placaSeleccionada1) {
            placaSeleccionada1 = placa;
        } else if (!placaSeleccionada2) {
            placaSeleccionada2 = placa;
            compararPlacas();
        }
    }

    // Agregar eventos de clic a las imágenes
    const imagenes = document.querySelectorAll(".fondoborroso img");
    imagenes.forEach((imagen, index) => {
        imagen.addEventListener("click", () => {
            const placa = placasDeVideoJSON[index];
            seleccionarPlaca(placa);
        });
    });


    // Función para comparar dos placas de video y mostrar la notificación con Toastify
function compararPlacas() {
    if (placaSeleccionada1 && placaSeleccionada2) {
        const rendimiento1 = placaSeleccionada1.rendimiento;
        const rendimiento2 = placaSeleccionada2.rendimiento;
        const nucleos1 = placaSeleccionada1.nucleos;
        const ram1 = placaSeleccionada1.ram;
        const nucleos2 = placaSeleccionada2.nucleos;
        const ram2 = placaSeleccionada2.ram;
        const precio1 = placaSeleccionada1.precio;
        const precio2 = placaSeleccionada2.precio;
        const lanzamiento1 = placaSeleccionada1.lanzamiento;
        const lanzamiento2 = placaSeleccionada2.lanzamiento;

        const comparacionMensaje = `Comparación de rendimiento:
            ${placaSeleccionada1.placaDeVideo} (${rendimiento1} puntos, ${nucleos1} núcleos, ${ram1} RAM, ${precio1} USD, ${lanzamiento1}) vs. 
            ${placaSeleccionada2.placaDeVideo} (${rendimiento2} puntos, ${nucleos2} núcleos, ${ram2} RAM, ${precio2} USD, ${lanzamiento2})`;

        // Mostrar la notificación de Toastify
        Toastify({
            text: comparacionMensaje,
            duration: 5000, // Duración de la notificación en milisegundos (5 segundos en este caso)
        }).showToast();

        placaSeleccionada1 = null;
        placaSeleccionada2 = null;
    }
}

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

    mostrarComparacionGuardada();
})
.catch(error => {
    console.error('Error al cargar el archivo JSON', error);
});







