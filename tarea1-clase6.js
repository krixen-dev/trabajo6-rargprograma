/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let cantidadIntegrantes = Number(prompt('Cuántos integrantes hay en tu grupo familiar?'));
const $formularioEdades = document.querySelector('#formulario-edades');
const $calcularEdades = document.querySelector("#calcular-edades");

while (!Number(cantidadIntegrantes)) {
  cantidadIntegrantes = Number(prompt('CARACTERES NO ADMITIDOS. Indique cuantos (números) integrantes hay en su grupo familiar'));
}

agregarInputsAFormulario(cantidadIntegrantes, $formularioEdades, 'integrante ')

$calcularEdades.onclick = function () {
  const datos = $formularioEdades.querySelectorAll(".integrante");
  let edades = []
  for (const edad of datos) {
    edades.push(Number(edad.value));
  }
  console.log(edades);
  document.querySelector(".mayor-edad").value = encontrarNumeroMasGrande(edades);
  document.querySelector(".menor-edad").value = encontrarNumeroMasChico(edades);
  document.querySelector(".promedio-edad").value = calcularPromedio(edades);
  mostrarElemento(document.querySelector("#resultados-edades"))
  return false;
}

function agregarInputsAFormulario(cantidad, $formulario, nombreInputs = 'input') {
  for (let i = 1; i < cantidad + 1; i++) {
    const $div = document.createElement("div");
    const $label = document.createElement("label");
    const $input = document.createElement("input");
    $label.textContent = `${nombreInputs.trim()} ${i}`;
    $input.className = `${nombreInputs.trim()} ${nombreInputs.trim()}-${i}`

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
  let numeroMasGrandeEncontrado = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    let numeroMayorActual = numeros[i];
    if (numeroMayorActual > numeroMasGrandeEncontrado) {
      numeroMasGrandeEncontrado = numeroMayorActual;
    }
  }
  return numeroMasGrandeEncontrado;
}

function encontrarNumeroMasChico(numeros) {
  let numeroMasChicoEncontrado = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    let numeroMenorActual = numeros[i];
    if (numeroMenorActual < numeroMasChicoEncontrado) {
      numeroMasChicoEncontrado = numeroMenorActual;
    }
  }
  return numeroMasChicoEncontrado;
}

function mostrarElemento($elemento) {
  $elemento.style.display = 'block';
}
