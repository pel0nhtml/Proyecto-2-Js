
const Identi = document.getElementById("mail")
const passI = document.getElementById("passI")
const btnRegistr = document.getElementById("btnRegistr")
const btnIden = document.getElementById("btnIden")

btnIden.addEventListener("click", function () {
    for (let index = 0; index < usersList.length; index++) {
        if (usersList[index].username === Identi.value && usersList[index].password1 === passI.value) {
            alert ("You have join the system")
        } else {
           alert ("Username or Password wrong")
        }
    }
})
