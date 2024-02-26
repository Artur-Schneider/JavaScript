window.alert('Eu posso deixar alertas')
window.confirm('Também posso pedir a confirmação de algo')
var nome = window.prompt('Digite seu nome:')
window.alert('Olá ' + nome + ', tudo bem?')

document.write(`<p>Olá, ${nome}! Seu nome tem ${nome.length} letras.</p>`)
document.write(`<p>Seu nome em maiúsculas é: ${nome.toUpperCase()}</p>`)
document.write(`<p>Seu nome em minúsculas é: ${nome.toLowerCase()}</p>`)

var n1 = Number.parseFloat(window.prompt('Digite um número:')) //string
var n2 = Number(window.prompt('Digite outro número:'))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é: ${s}`)

var n3 = Number(window.prompt(`Qual é o seu salário?`))
window.alert(`Então seu salário é de R$ ${n3}`)
// Fazer comentários é importantíssimo