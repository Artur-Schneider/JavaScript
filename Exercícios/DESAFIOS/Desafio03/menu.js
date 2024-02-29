function contar() {
    var inicio = document.getElementById('nin')
    var fim = document.getElementById('nfim')
    var razao = document.getElementById('raz')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || razao.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var r = Number(razao.value)
    var x = i
    if (r <= 0) {
        window.alert('[ERRO] Razão inválida! Considerando Razão 1...')
        r = 1
    }
    if (i < f) {
    do {
        res.innerHTML += ` ${x}➡`
        x += r
    } while (x <= f)
    } else {
        do {
            res.innerHTML += ` ${x}➡`
            x -= r
        } while (x >= f)
    }
    res.innerHTML += '🏁'
    }
}