console.log('=================================')
function parimpar(n) {
    if (n%2 == 0) {
        return 'O número escolhido é Par!'
    } else {
        return 'O número escolhido é Ímpar!'
    }
}
let res = parimpar(12)
console.log(res)

console.log('=================================')

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(7, 3))

console.log('=================================')

let v = function(x) {
    return x*2
}
console.log(v(5))

console.log('=================================')

function fatorial(f) {
    let fat = 1
    for (c = f; c > 1; c--) {
        fat *=c
    }
    return fat
}
console.log(fatorial(5))

console.log('=================================')