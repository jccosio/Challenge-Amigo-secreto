// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo desde el campo de texto
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('amigo'); // Campo de entrada con ID 'amigo'
    const nombre = inputNombre.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada: verificar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostrar alerta si el campo está vacío
    } else {
        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Actualizar la lista visible en la página
        const lista = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        console.log(`Nombre agregado: ${nombre}`); // Confirmar en la consola
        console.log("Lista actual de amigos:", amigos); // Mostrar la lista actual

        // Limpiar el campo de entrada
        inputNombre.value = "";
    }
}

// Función para seleccionar un amigo secreto aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear."); // Alerta si el array está vacío
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const listaResultados = document.getElementById('resultado');
    const resultadoElemento = document.createElement('li');
    resultadoElemento.textContent = `El amigo secreto es: ${nombreSorteado}`;
    listaResultados.innerHTML = ""; // Limpiar resultados previos
    listaResultados.appendChild(resultadoElemento);

    console.log(`El amigo secreto sorteado es: ${nombreSorteado}`); // Confirmar en consola
}
