var res = document.getElementById('res')
var eu = {
    nome: 'Artur',
    idade: 18,
    genero: 'Masculino',
}

res.innerHTML = `Olá! Meu nome é ${eu.nome}, eu tenho ${eu.idade} anos e sou do sexo ${eu.genero}.`