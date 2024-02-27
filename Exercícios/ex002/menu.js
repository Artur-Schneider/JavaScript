var p1 = window.document.getElementsByTagName('p')[1]
window.document.write(`<strong>Está escrito assim: </strong>` + p1.innerHTML)

var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerHTML = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerHTML = 'Entrou!'
}

function sair() {
    a.innerHTML = 'Saiu!'
    a.style.background = '#42aa52'
}