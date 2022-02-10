const enviar = document.querySelector('.submit');
const inputValor = document.querySelector('.inputValor');
const resultado = document.querySelector('.resultado');

enviar.addEventListener('click', function () {
let valor = inputValor.value;
let contador1= 0;
let contador2= 0;
let contador3= 0;
// 1 REAL
for (let real = 1; real <= valor; real++) {
	contador1++;
}
// 50 CENTAVOS
for (let cinquentaCent = 0.5; cinquentaCent <= valor; cinquentaCent = cinquentaCent + 0.5) {
	contador2++;
}
//10 CENTAVOS
for (let cincoCent = 0.1; cincoCent <= valor; cincoCent = cincoCent + 0.1) {
	contador3++;
}

resultado.innerHTML = `O resultado é de ${contador1} moedas de 1 real ou ${contador2} moedas de 50 centavos ou ${contador3} moedas de 10 centavos.`
})