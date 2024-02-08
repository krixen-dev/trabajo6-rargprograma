/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $formularioSalarios = document.querySelector("#formulario-salarios");
const $agregarIntegrante = document.querySelector("#agregar-integrante");
const $calcularSalarios = document.querySelector("#calcular-salarios");

$agregarIntegrante.onclick = function (e) {
  agregarCampoInteraccionAFormulario($formularioSalarios, 'salario');
  e.preventDefault()
}

$calcularSalarios.onclick = function (e) {
  const datos = $formularioSalarios.querySelectorAll(".salario");
  let salarios = [];
  for (const salario of datos) {
    salarios.push(salario.value);
  }
  console.log(encontrarNumeroMasGrande(salarios));
  console.log(encontrarNumeroMasChico(salarios));
  console.log(calcularPromedio(salarios));
  console.log(calcularSalarioMensualPromedio(salarios));
  e.preventDefault()
}

function agregarCampoInteraccionAFormulario($formulario, nombreCampo) {
  const $div = document.createElement("div");
  const $input = document.createElement("input");
  const $label = document.createElement("label");
  $input.placeholder = nombreCampo;
  $input.className = nombreCampo;
  $label.textContent = nombreCampo;

  const $botonEliminar = document.createElement("button");
  $botonEliminar.textContent = "eliminar"

  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($botonEliminar);
  $formulario.appendChild($div);

  $botonEliminar.onclick = function () {
    eliminarElementoDeUnFormulario($div)
  }

  function eliminarElementoDeUnFormulario($elemento) {
    $elemento.remove();
  }
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

function calcularSalarioMensualPromedio(salarios) {
  let salariosMensuales = []
  for (const salario of salarios) {
    salariosMensuales.push(calcularSalarioMensual(salario))
  }
  return calcularPromedio(salariosMensuales)

  function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_UN_ANIO = 12;
    return salarioAnual / MESES_EN_UN_ANIO;
  }
}
