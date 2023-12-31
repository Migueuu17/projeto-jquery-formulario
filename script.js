$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');

    $('form').validate({ 
        rules: {        
            nome: { 
                required: true, },
            email: {      
                email: true,           
                required: true,    },
            cpf: { 
                required: true },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
            }
    })
})
