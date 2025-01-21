// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nameInput = document.getElementById("nameInput");
const addButton = document.getElementById("addButton");
const nameList = document.getElementById("nameList");
const drawButton = document.getElementById("drawButton");
const result = document.getElementById("result");

const names = []; // Array to store the list of names

// Function to add a name to the list
// Código JavaScript para "Amigo Secreto"

const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

const amigos = []; // Lista para almacenar los nombres de amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpiar la lista

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}