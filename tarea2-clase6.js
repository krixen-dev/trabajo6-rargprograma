/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $formularioSalarios = document.querySelector("#formulario-salarios");
const $agregarIntegrante = document.querySelector("#agregar-integrante");
const $calcular = document.querySelector("#calcular-salarios");

$agregarIntegrante.onclick = function (e) {
  agregarIntegranteAlFormulario($formularioSalarios);
  e.preventDefault()
}

$calcular.onclick = function (e) {
  const datos = $formularioSalarios.querySelectorAll(".salario");
  let lista = [];
  for (const salario of datos) {
    lista.push(salario.value);
  }
  console.log(encontrarNumeroMasGrande(lista));
  console.log(encontrarNumeroMasChico(lista));
  console.log(calcularPromedio(lista));
  console.log(calcularSalarioMensualPromedio(lista));
  e.preventDefault()
}


function agregarIntegranteAlFormulario($formulario) {
  const $div = document.createElement("div");
  const $input = document.createElement("input");
  const $label = document.createElement("label");
  $input.className = "salario";
  $label.textContent = "salario";
  const $botonEliminar = document.createElement("button");
  $botonEliminar.textContent = "eliminar"
  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($botonEliminar);
  $formulario.appendChild($div);
  $botonEliminar.onclick = function () {
    eliminarIntegranteDeFormulario($div)
  }
}

function eliminarIntegranteDeFormulario($div) {
  $div.remove();
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

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;
  for (let i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += Number(numeros[i]);
  }
  return sumaNumeros / cantidadNumeros;
}

function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_UN_ANIO = 12;
  return salarioAnual / MESES_EN_UN_ANIO;
}

function calcularSalarioMensualPromedio(salarios) {
  let salariosMensuales = []
  for (let i = 0; i < salarios.length; i++) {
    salariosMensuales.push(calcularSalarioMensual(salarios[i]))
  }
  return calcularPromedio(salariosMensuales);
}
