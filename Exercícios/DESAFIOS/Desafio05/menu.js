var num = document.getElementById('num')
var lista = document.getElementById('tabela')
var res = document.getElementById('res')
var valores = []

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
        let item = document.createElement('option')
        lista.appendChild(item)
        item.text = `Valor ${num.value} adicionado`
        item.value = `n${Number(num.value)}`
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
    let tot = valores.length
    let soma = 0
    let media = 0
    for (pos in valores) {
        soma += valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Os números escolhidos foram: ${valores}</p>`
    res.innerHTML += `<p>O vetor tem ${tot} número(s) cadastrados</p>`
    res.innerHTML += `<p>Esta é a ordem crescente: ${valores.sort((a, b)=> a-b)}</p>`
    res.innerHTML += `<p>O menor valor do vetor é ${valores[0]}.</p>`
    res.innerHTML += `<p>O maior valor do vetor é ${valores[tot-1]} </p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}