const inputNome = document.querySelector('.inputNome');
const inputIdade= document.querySelector('.inputIdade');
const inputEstudo = document.querySelector('.inputEstudo');
const enviar = document.querySelector('.submit');
const resultado = document.querySelector('.resultado');

enviar.addEventListener('click', function () {
	let nome = inputNome.value;
	let idade = inputIdade.value;
	let estudo = inputEstudo.value;
console.log('Funcionando');
resultado.innerHTML = `Seu nome é ${nome}, você tem ${idade} anos e estuda ${estudo}.`
})