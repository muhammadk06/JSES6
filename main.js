let nam = ()=> {
let name = document.getElementById("nm").value
document.getElementById("mesge").innerHTML = "Have A Happy New Year " + name
document.getElementById("pic").src = "d.jpeg"
document.getElementById("bd").style.backgroundImage = "url(bg.gif)"
}

document.getElementById("cl").addEventListener("click", nam);

let hal = () => {
let name = document.getElementById("nm").value
document.getElementById("mesge").innerHTML = "Have a Happy Halloween " + name
document.getElementById("pic").src = "hal.jpeg"
document.getElementById("bd").style.backgroundImage = "url(halloween.gif)"
}
document.getElementById("hal").addEventListener("click", hal);