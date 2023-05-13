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

// Seleciona a opção ao cliclar em qualquer local do input grouop
$('body').on('click', '.vlr_doacao', function (e) {
    $(this).find("input[type='radio']").prop('checked', true);
});

$(document).ready(function () {
    // adiciona mascara ao campo outros na seleção de valores
    $('input[name=doacao_vlr_outro]').mask("#.##0,00", { reverse: true });
});


function getDonationValue() {
    selectedInput = $('input[name=donation_value]:checked').val();
    return $('input[name=' + selectedInput + ']').val();
}
