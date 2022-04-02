var valores = [9,3,5,4,7,1,8,6]
valores.sort()
/*console.log(`Aqui estao os seu valores: ${valores}`)
valores.sort()
console.log(`Assim sao os valores em ordem crescente: ${valores}`)
//var pos = valores.indexOf(9)
console.log(`O valor 9 esta na posição ${pos}`)
valores.push(2)
valores.sort()
console.log(`Agora sua variavel tem um novo valor: ${valores}`)
var pos = valores.indexOf(9)
console.log(`O valor 9 esta na posição ${pos}`)*/

for(var pos in valores){
    console.log(`O valor ${pos} esta na posição ${valores}`)
}