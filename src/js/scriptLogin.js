
const mail = document.getElementById("mail")
const passwordI = document.getElementById("passwordI")
const btnIden = document.getElementById("btnIden")

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const listaScRegis = JSON.parse(localStorage.getItem("userInfo")||[])
console.log(listaScRegis)

btnIden.addEventListener("click", function () {
    console.log(45);
    for (let index = 0; index <listaScRegis.length; index++) {
        if (listaScRegis[index].password1==passwordI.value && listaScRegis[index].mail==mail.value) {
            

            window.location.href="indexMainPage.html"
            
        } else {
           
        }
    }
})
