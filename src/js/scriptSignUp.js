const username = document.getElementById("username")
const mail = document.getElementById("mail")
const password1 = document.getElementById("password1")
const btnRegi = document.getElementById("btnR")
const btnIniSes = document.getElementById("btnS")

let usersList = []

btnR.addEventListener("click", function () {
    let user = {
        username:username.value,
        mail:mail.value,
        password1:password1.value
    }
    usersList.push(user)
})

//SIN FUNCION
//btnIniSes.addEventListener("click", function () {
//   
//})
