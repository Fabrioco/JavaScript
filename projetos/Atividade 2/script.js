var agora = new Date()
var agora = getHours()
var agora = Number(hora.value)

if (agora >= 5 && agora < 12){
    res.innerText = `agora sao ${agora}`
} else {
    res.innerHTML = `vai dormir mlk`
}