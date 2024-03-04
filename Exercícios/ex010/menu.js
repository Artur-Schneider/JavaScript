let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}

console.log('=================================')

for (a in num) {
    console.log(`A posição ${a} tem o valor ${num[a]}`)
}

console.log('=================================')

let pos = num.indexOf(8)
console.log(`${pos}`)

let pose = num.indexOf(4)
console.log(`${pose}`)