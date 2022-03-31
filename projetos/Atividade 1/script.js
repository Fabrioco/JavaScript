function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       alert('[ERRO] Verifique os dados e tente novamente')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            estado.innerHTML = 'grianza'
        } else if (idade < 21){
            //jovem
            estado.innerHTML = 'grianza'
        } else if (idade < 50){
            //adulto
            estado.innerHTML = 'crise da meia idade'
        } else{
            //idoso
            estado.innerHTML = 'oq q há velin?'
        }
    }   else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            estado.innerHTML = 'grianza'
        } else if (idade < 21){
            //jovem
            estado.innerHTML = 'grianza'
        } else if (idade < 50){
            //adulto
            estado.innerHTML = 'crise da meia idade'
        } else{
            //idoso
            estado.innerHTML = 'oq q há velin?'
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   }
}