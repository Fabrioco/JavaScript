var valores = [8, 1, 4,6,7]
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} elementos`)
var pos = valores.indexOf(1)
if (pos == -1) {
    console.log(`valor n encontrado`)
}else{
    console.log(`O valor esta na posição ${pos}`)
}
