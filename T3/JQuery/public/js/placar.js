$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Vinicius";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);

  $(".placar").slideDown(500);
  console.log("teste");
  scrollPlacar();
}

function scrollPlacar() {
  var posicaoPlacar = $(".placar").offset().top;
  console.log(posicaoPlacar);
  $("body").animate(
  {
    scrollTop: posicaoPlacar+"px"
  }, 1000);
}

function novaLinha(usuario, numPalavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(numPalavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href","#");

  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;

}

function removeLinha() {
  event.preventDefault();
  var linha = $(this).parent().parent();
  linha.fadeOut();
  setTimeOut(function() {
    linha.remove();
  },400)
}

function mostraPlacar() {
  $(".placar").stop().slideToggle(600);

}