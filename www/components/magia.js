// This is a JavaScript file

$(document).on("click","#calcular", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var valor3 = $("#valor3").val();

  var result = parseFloat(valor3) * parseFloat(valor2);
  var X = result/parseFloat(valor1);

  $("#valorX").val(X);
});

$(document).on("click","#limpar", function(){
  $("#valor1").val(null);
  $("#valor2").val(null);
  $("#valor3").val(null);
  $("#valorX").val("X");
  $("#result").val(null);
});