function gerar() {
    var num = document.getElementById('num')
    var n = Number(num.value)
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let c = 1
        tab.innerHTML = ` `
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}