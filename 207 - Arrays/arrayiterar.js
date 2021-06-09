var produtos = new Array ('caneta','lapis','tesoura','borracha','caderno','livro')

var output = document.querySelector('div#output')


var msg = ''

for(var i=0; i<6;i++)
    {
        msg += `produto <mark>${i+1}</mark>: ${produtos[i]} <br>`
    }

output.innerHTML = msg