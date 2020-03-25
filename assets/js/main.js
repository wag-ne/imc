var peso = document.querySelector('#peso');
var altura = document.querySelector('#altura');
var btnCalc = document.querySelector('button');
var container = document.querySelector('section');
var form = document.querySelector('#formulario')

form.addEventListener('submit', function(e) {
  e.preventDefault();
})

function calcImc(peso, altura) {
  var imc = (peso/(altura ** 2)).toFixed(2);
  if (imc < 18.5){
    return `Seu IMC é ${imc} (Abaixo do peso) `
  }
  if (imc <= 24.9) {
    return `Seu IMC é ${imc} (Peso normal) `
  }
  if (imc <= 29.9) {
    return `Seu IMC é ${imc} (Sobrepeso) `
  }
  if (imc <= 34.9) {
    return `Seu IMC é ${imc} (Obesidade grau 1) `
  }
  if (imc <= 39.9) {
    return `Seu IMC é ${imc} (Obesidade grau 2) `
  }
  if (imc >= 40) {
    return `Seu IMC é ${imc} (Obersidade grau 3) `
  }
}


btnCalc.onclick = function() {
  var imc = calcImc(peso.value, altura.value);

  var component = document.createElement('div');
  container.appendChild(component);
  var result = document.createTextNode(imc);
  component.appendChild(result);
  peso.value = '';
  altura.value = '';
}

// peso sobre altura ao quadrado