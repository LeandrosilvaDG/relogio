
// Chamada para  ocultar button
$("#mostrar").hide();

// Function responsavel por gericar o relógio
function relogio(){

	// Variavel de captura de data direto do sistema
	var tempo = new Date();

	//Variaveis de separação de time em segundo,minuto,hora
	var seg = tempo.getSeconds() * 6;
	var min = tempo.getMinutes() * 6 + seg/60;
	var hrs = tempo.getHours() * 15 + min/12;

	// Variaveis de incremento de rotação dos ponteiros 
	var rotSegundo = "rotate("+seg+"deg)";
	var rotMinuto = "rotate("+min+"deg)";
	var rotHora = "rotate("+hrs+"deg)";

	//  Incrementando e atualizando posição dos ponteiros
	$("#segundo").css({"transform":rotSegundo});
	$("#minuto").css({"transform":rotMinuto});
	$("#hora").css({"transform":rotHora});
}

$(document).ready(function(){
	
	//  Chamada ao metodo de execução por intervalo de tempo para atualização do relogio
	setInterval(relogio, 1000);

	// ocultando o relógio e o button oclutar
	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		$(".relogio").hide();
	});

	// mostrando o relógio
	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		$(".relogio").show();
	});

});