var num = document.getElementById('num')
var lista = document.getElementById('tabela')
var res = document.getElementById('res')
var valores = []
var item = document.createElement('option')
item.text = 'Adicione números:'
lista.appendChild(item)

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        item.text = `Valor ${valores[0]} adicionado`
        item.value = `n${valores[0]}`
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}