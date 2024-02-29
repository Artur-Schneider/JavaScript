var velocidade = document.getElementById('txtvel')
var vel = document.getElementById('veri')
vel.addEventListener('click', calcular)
var res = window.document.getElementById('res')

function calcular() {
    var velo = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${velo}</strong>Km/h!</p>`
    if (velo > 60) {
        res.innerHTML = `<p>A velocidade máxima permitida é de 60Km/h! Sua velocidade é de <strong>${velo}Km/h</strong>. Então você receberá uma multa por excesso de velocidade!</p>`
    }
    else {
    res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
    }
}


var txtreg = document.getElementById('txtreg')
var verreg = document.getElementById('verreg')
verreg.addEventListener('click', clicar)
var resreg = document.getElementById('resreg')

function clicar() {
    var regi = String(txtreg.value)
    if (regi == 'Brasil') {
        resreg.innerHTML = `<p>Você é Brasileiro!</p>`
    } else {
        resreg.innerHTML = `<p>Você é Estrangeiro!</p>`
    }
}