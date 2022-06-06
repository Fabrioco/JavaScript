function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `agora sao ${hora} horas`
        if(hora >= 5 && hora < 12){
        img.src = 'amanhecer.jpg'
        document.body.style.background = 'green'
    }   else if (hora >=12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'red'
    }   else {
        img.src = 'noite.jpg'
        document.body.style.background = 'blue'
    }
}