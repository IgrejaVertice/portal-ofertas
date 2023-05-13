// Seleciona a opção ao cliclar em qualquer local do input grouop
$('body').on('click', '.vlr_doacao', function(e){
    $(this).find("input[type='radio']").prop('checked', true);
});
