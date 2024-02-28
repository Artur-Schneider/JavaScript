var vel = 72
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60) { //condição simples
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
} 
else { //condição composta
    console.log(`Dirija sempre usando cinto de segurança!`)
}

var país = 'Brasil'
console.log(`Vivendo em ${país}`)
if (país == 'Brasil' || 'Brazil') {
    console.log('Vocé é Brasileiro!')
}
else {
    console.log('Você é estrangeiro!')
}