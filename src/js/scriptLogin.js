
const mail = document.getElementById("mail")
const passwordI = document.getElementById("passwordI")
const btnIden = document.getElementById("btnIden")
//////////////////////////////////////////////////////////////////////////////////////////////////////////7

//const btnRegistr = document.getElementById("btnRegistr")

/////////////////////////////////////////////////////////////////////////////////////////////////////////7
const valoresScRegis =JSON.parse(localStorage.getItem("userinfo")||[])
console.log(valoresScRegis)

btnIden.addEventListener("click", function () {
    for (let index = 0; index < usersList.length; index++) {
        if (usersList[index].username === valoresScRegis.value && usersList[index].password === passwordI.value) {
            alert ("Bienvenido")
        } else {
           alert ("Username or Password wrong")
        }
    }
})
