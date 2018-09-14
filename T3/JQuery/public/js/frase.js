$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function buscaFrase() {
  $("#spinner").show();
  var fraseId = $("#frase-id").val();
  var dados = { id: fraseId};
  console.log("ID" + fraseId);
  $.get("http://localhost:3000/frases", dados, trocaFrase).fail(function(){
    $("#erro").toggle();
    setTimeout(function() {
      $("#erro").toggle();
    }, 3000);
  })
  .always(function() {
    $("#spinner").toggle();
  });

}

function trocaFrase(data) {
  var frase = $(".frase");
  frase.text(data.texto);
  atualizaTamanhoFrase(data);
  atualizaTempoInicial(data.tempo);


}

function fraseAleatoria() {
  $("#spinner").show();

  $.get("http://localhost:3001/frases",trocaFraseAleatoria)
  .fail(function() {
    $("#erro").toggle();
    setTimeout(function() {
      $("#erro").toggle();
    }, 3000);
  })
  .always(function() {
    $("#spinner").toggle();
  });
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase(data);
  atualizaTempoInicial(data[numeroAleatorio].tempo);

}
