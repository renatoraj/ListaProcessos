$(document).ready(function() {
	$("body div:first").append("<legend>Lista de itens</legend><textarea id='jvalue'></textarea></br>");
	var buttonSend = document.createElement("button");
	buttonSend.id = "sendLista";
	buttonSend.onclick= function(){
		var listaJson = JSON.parse($("#jvalue").val());
		$.each(listaJson,function(index){
			var item = listaJson[index];
			$.ajax({url: "https://portal.conam.com.br/itapecerica/index.php",data:{
				"frm_documento_requerente": item.frm_documento_requerente + "",
				"frm_numero_processo": item.frm_numero_processo + "",
				"frm_ano_processo":"20" + item.frm_ano_processo},
				success: function(result){
					console.log(result);
				$("#htmlNovo").append(result);
			  }});
		})
	}
	buttonSend.value="Carregar lista"
	$("body div:first").append(buttonSend);
	$("body div:first").append("</br><section id='htmlNovo'></section");	
});
