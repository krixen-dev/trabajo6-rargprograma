/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const cantidadIntegrantes = Number(prompt('Cuántos integrantes hay en tu grupo familiar?'));
const $formulario = document.querySelector('form');
const calcular = document.querySelector("#calcular");


agregarCamposFormulario(cantidadIntegrantes, $formulario);

calcular.onclick = function () {
  const datos = $formulario.querySelectorAll("input");
  let edades = []
  for (const edad of datos) {
    edades.push(Number(edad.value));
  }

  console.log(calcularPromedio(edades));
  console.log(encontrarNumeroMasGrande(edades));
  console.log(encontrarNumeroMasChico(edades));
  return false;
}

function agregarCamposFormulario(cantidad, $formulario) {
  for (let i = 1; i < cantidad + 1; i++) {
    const label = document.createElement("label");
    label.textContent = `integrante: ${i}`;
    $formulario.appendChild(label)
    const input = document.createElement("input");
    $formulario.appendChild(input);
  }
  return $formulario
}

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;
  for (let i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += Number(numeros[i]);
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
