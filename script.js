
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('#donationForm')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          swal("Sucesso", "O pagamento será concluído no PagSeguro", "success", {
            button: "Ok",
          });
        }
        form.classList.add('was-validated')
        $('#donationForm').attr('action',"http://ofertas.igrejavertice.com/pagseguro")
        $('input[name=vlr_doacao]').val(getDonationValue())
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
    $(this).find("input[type='radio']").focus();
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

$('body').on('click', '.has-validation.vlr_doacao', function (e) {
  $(this).find("input[type='text']").focus();
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
    $('input[name=doacao_vlr_outro]').maskMoney({thousands:'.', decimal:','});
    $('input[name=telefone]').mask("(99) 99999-9999");
    $('input[name=data_nascimento]').mask("99/99/9999");
});


function getDonationValue() {
    var selectedInput = $('input[name=donation_value]:checked').val();
    var donationValue = $('input[name=' + selectedInput + ']').val().replace(/[^0-9]+/g,'')/100;
    return donationValue.toFixed(2); 
}
