/*
alert("Olá HCODE!");
const resposta = confirm("Deseja excluir?");
console.log(resposta);
*/

const a = 10;
const b = 33;

function somar(a, b){
	return parseInt(a) + parseInt(b);
}

document.querySelector("#calcular").addEventListener("click", function(){
	var valorA = document.querySelector("#valorA").value;
	var valorB = document.querySelector("#valorB").value;
	if(valorA.length > 0 && valorB.length > 0 ) {
		//alert(parseInt(valorA) + parseInt(valorB));
		somar(valorA, valorB);
	} else {
		alert("Digite os valores para o cálculo");
	}
});