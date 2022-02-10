const enviar = document.querySelector('.submit');
const inputTexto = document.querySelector('.inputValor');
const resultado = document.querySelector('.resultado');

enviar.addEventListener('click', function (){
const texto = String(inputTexto.value);

let arrayFrases = [];
arrayFrases = texto.split('.');

let arrayTexto = [];
arrayTexto = texto.split(' ');

let remText = texto.replace(/ /g, "");
remText = remText.replace(/[^a-zA-Z ]/g, "");
console.log(arrayFrases.length);


if (arrayFrases.length < 3) {
resultado.innerHTML = `O texto contem ${arrayFrases.length -1} frase, ${arrayTexto.length} palavras e ${remText.length} letras.`
} else {
	resultado.innerHTML = `O texto contem ${arrayFrases.length -1} frases, ${arrayTexto.length} palavras e ${remText.length} letras.`
}
})