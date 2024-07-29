///////////////////////////////////////////////////////////

const username = document.getElementById("username")
const mail = document.getElementById("mail")
const password1 = document.getElementById("password1")
const btnRegi = document.getElementById("btnRegi")

const btnIniSes = document.getElementById("btnIniSes")


//////////////////////////////////////////////////////////
let usersList = []

btnRegi.addEventListener("click", function () {
    let user = {
        username:username.value,
        mail:mail.value,
        password1:password1.value
    }
    usersList.push(user)
    localStorage.setItem("userInfo", JSON.stringify(usersList))
})
/////////////////////////////////////////////////////////////