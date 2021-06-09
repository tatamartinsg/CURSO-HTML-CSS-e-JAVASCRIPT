
    var output = document.querySelector('div#div-1')
    var mensagem = ''

function digitenumero(){
    var alerta = Number(window.prompt("Digite um numero"))
    var i = 0
    for ( i=0; i<100; i++ )
    {
        var multiplicar = i * alerta;
        mensagem += `${i} * ${alerta} = ${multiplicar} <br>`
    }
    output.innerHTML = mensagem;
}

function limpartela()
{
    mensagem = ''
    output.innerHTML = mensagem
}