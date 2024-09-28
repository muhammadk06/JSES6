let nam = ()=> {
let name = document.getElementById("nm").value
document.getElementById("mesge").innerHTML = "Have A Happy New Year " + name
document.getElementById("pic").src = "d.jpeg"
}

document.getElementById("cl").addEventListener("click", nam);

