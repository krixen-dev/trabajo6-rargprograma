/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let cantidadIntegrantes = Number(prompt('Cuántos integrantes hay en tu grupo familiar?'));
const $formularioEdades = document.querySelector('#formulario-edades');
const $calcularEdades = document.querySelector("#calcular-edades");
const $reiniciarEdades = document.querySelector("#reiniciar-edades");

while (!Number(cantidadIntegrantes)) {
  cantidadIntegrantes = Number(prompt('CARACTERES NO ADMITIDOS. Indique cuantos (números) integrantes hay en su grupo familiar'));
}

agregarInputsAFormulario(cantidadIntegrantes, $formularioEdades, 'integrante ')

$calcularEdades.onclick = function () {
  const datos = $formularioEdades.querySelectorAll(".integrante input");
  let edades = []
  for (const edad of datos) {
    edades.push(Number(edad.value));
  }
  document.querySelector(".mayor-edad").value = encontrarNumeroMasGrande(edades);
  document.querySelector(".menor-edad").value = encontrarNumeroMasChico(edades);
  document.querySelector(".promedio-edad").value = calcularPromedio(edades);
  mostrarElemento(document.querySelector("#resultados-edades"))
  return false;
}

$reiniciarEdades.onclick = function () {
  const integrantes = $formularioEdades.querySelectorAll(".integrante")
  for (const integrante of integrantes) {
    eliminarElementoDeUnFormulario(integrante);
  }
  ocultarElemento(document.querySelector("#resultados-edades"));
  while (!Number(cantidadIntegrantes)) {
    cantidadIntegrantes = Number(prompt('CARACTERES NO ADMITIDOS. Indique cuantos (números) integrantes hay en su grupo familiar'));
  }
  agregarInputsAFormulario(cantidadIntegrantes, $formularioEdades, 'integrante ')
}

function agregarInputsAFormulario(cantidad, $formulario, nombreInputs = 'input') {
  for (let i = 1; i < cantidad + 1; i++) {
    const $div = document.createElement("div");
    const $label = document.createElement("label");
    const $input = document.createElement("input");
    $label.textContent = `${nombreInputs.trim()} ${i}`;
    $input.className = `${nombreInputs.trim()}-${i}`
    $div.className = `${nombreInputs.trim()}`

    $div.appendChild($label);
    $div.appendChild($input);
    $formulario.appendChild($div)
  }
  return $formulario
}

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;
  for (let i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += numeros[i];
  }
  return sumaNumeros / cantidadNumeros;
}

function encontrarNumeroMasGrande(numeros) {
  const numerosOrdenadosMayorAMenor = numeros.sort((a, b) => b - a);
  const numeroMasGrandeEncontrado = numerosOrdenadosMayorAMenor[0];
  return numeroMasGrandeEncontrado;
}

function encontrarNumeroMasChico(numeros) {
  const numerosOrdenadosMenorAMayor = numeros.sort((a, b) => a- b);
  const numeroMasChicoEncontrado = numerosOrdenadosMenorAMayor[0];
  return numeroMasChicoEncontrado;
}

const mostrarElemento = $elemento => $elemento.style.display = 'block';
const ocultarElemento = $elemento => $elemento.style.display = 'none';
const eliminarElementoDeUnFormulario = $elemento => $elemento.remove();

