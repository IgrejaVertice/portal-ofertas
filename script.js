// Seleciona a opção ao cliclar em qualquer local do input grouop
$('body').on('click', '.vlr_doacao', function(e){
    $(this).find("input[type='radio']").prop('checked', true);
});
$(document).ready(function(){
    // adiciona mascara ao campo outros na seleção de valores
    $('input[name=doacao_vlr_outro]').mask("#.##0,00", {reverse: true});
});
