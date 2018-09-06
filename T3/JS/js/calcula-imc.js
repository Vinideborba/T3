var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  var PesoEhValido = validaPeso(peso);
  var AlturaEhValida = validaAltura(altura);

  if (!PesoEhValido) {
    console.log("Peso inválido");
    tdIMC.textContent = "peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!AlturaEhValida) {
    console.log("Altura inválido");
    tdIMC.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (AlturaEhValida && PesoEhValido) {
    var imc = calculaImc(peso,altura);
    tdIMC.textContent = imc;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  }else   {
    return false;
  }
}

function validaPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
