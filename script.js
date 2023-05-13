// Desabilita qualquer submissão de formulario que não esteja validado
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

// Desabilita input em campos com classe .readonly
$(".readonly").on('keydown paste focus mousedown', function(e){
  if(e.keyCode != 9) // ignore tab
      e.preventDefault();
});

// Permite selecionar o radio a clicar na div pai e cria o fluxo de validação
// especial para a opção outros
$('body').on('click', '.vlr_doacao', function (e) {
    $(this).find("input[type='radio']").prop('checked', true);
    if (getDonationValue() == ''){
      $('.vlr_doacao').find("input[type='text']").attr('required', 'true');
      $('.vlr_doacao').find("input[type='radio']").each(function(){
        this.setCustomValidity('Por favor adicione um valor para sua doação');
      });
    } else {
      $('.vlr_doacao').find("input[type='text']").removeAttr('required');
      $('.vlr_doacao').find("input[type='radio']").each(function(){
        this.setCustomValidity('');
      });
    }
});
$('body').on('keydown paste focus mousedown', 'input[name=doacao_vlr_outro]', function (e) {
  if ($(this).val() != ''){
    $('.vlr_doacao').find("input[type='text']").removeAttr('required');
    $('.vlr_doacao').find("input[type='radio']").each(function(){
      this.setCustomValidity('');
    });
  }
});

$(document).ready(function () {
    // adiciona mascara ao campo outros na seleção de valores
    $('input[name=doacao_vlr_outro]').mask("#.##0,00", { reverse: true });
});


function getDonationValue() {
    selectedInput = $('input[name=donation_value]:checked').val();
    return $('input[name=' + selectedInput + ']').val();
}
