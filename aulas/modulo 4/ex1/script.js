function contar(){
    var i = document.getElementById('inc')
    var inicio = Number(i.value)
    var f = document.getElementById('fm')
    var fim = Number(f.value)
    var p = document.getElementById('ps')
    var passo = Number(p.value)
    var res = document.getElementById('res')
    
    if(passo <= 0 ) {
        alert('Passo Invalido! Considerando PASSO 1')
        passo = 1
    }
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('por favor insira um valor')
    } else {
        res.innerHTML = 'contando: <br>'
            if(inicio < fim){
                for(var n = inicio; n <= fim; n += passo){
                res.innerHTML += ` ${n} \u{1F449} ` 
            }
        } else {
            for(var n = inicio; n >= fim; n -= passo){
                res.innerHTML += ` ${n} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}