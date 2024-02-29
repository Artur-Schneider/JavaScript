function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML += '<p>Bom Dia!</p>'
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#f0d8be'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#c78032'
    } else {
        msg.innerHTML += '<p>Boa Noite!</p>'
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#9a78b4'
    }
}